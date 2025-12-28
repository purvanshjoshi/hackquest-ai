#!/bin/bash
set -e

# ========== CONFIGURATION ==========
RG_NAME="hackquest-ai-rg"
LOCATION="eastus"
APP_PLAN_NAME="hackquest-ai-plan"
BACKEND_APP_NAME="hackquest-backend-api"
DB_SERVER_NAME="hackquest-db-server"
DB_NAME="hackquest_db"
DB_ADMIN="dbadmin"
DB_PASSWORD="$(openssl rand -base64 16)Hq@2025!"  # Generate strong password
ACR_NAME="hackquestacr"
KV_NAME="hackquest-keyvault"
GITHUB_FRONTEND_REPO="https://github.com/YOUR_USERNAME/YOUR_FRONTEND_REPO"

echo "======================================"
echo "HackQuest AI Azure Deployment"
echo "======================================"
echo ""

# ========== 2. APP SERVICE PLAN ==========
echo "📦 Creating App Service Plan: $APP_PLAN_NAME..."
az appservice plan create \
  --name $APP_PLAN_NAME \
  --resource-group $RG_NAME \
  --sku B1 \
  --is-linux \
  --location $LOCATION \
  --output none
echo "✓ App Service Plan created"

# ========== 3. POSTGRESQL FLEXIBLE SERVER ==========
echo "🗄️  Creating PostgreSQL Flexible Server: $DB_SERVER_NAME..."
az postgres flexible-server create \
  --name $DB_SERVER_NAME \
  --resource-group $RG_NAME \
  --location $LOCATION \
  --admin-user $DB_ADMIN \
  --admin-password "$DB_PASSWORD" \
  --tier Burstable \
  --sku-name Standard_B1ms \
  --storage-size 32 \
  --version 16 \
  --public-access 0.0.0.0 \
  --output none

echo "📝 Creating database: $DB_NAME..."
az postgres flexible-server db create \
  --resource-group $RG_NAME \
  --server-name $DB_SERVER_NAME \
  --database-name $DB_NAME \
  --output none
echo "✓ PostgreSQL Flexible Server created"

# ========== 4. AZURE CONTAINER REGISTRY ==========
echo "📦 Creating Container Registry: $ACR_NAME..."
az acr create \
  --resource-group $RG_NAME \
  --name $ACR_NAME \
  --sku Basic \
  --location $LOCATION \
  --output none
echo "✓ Container Registry created"

# ========== 5. KEY VAULT ==========
echo "🔐 Creating Key Vault: $KV_NAME..."
az keyvault create \
  --name $KV_NAME \
  --resource-group $RG_NAME \
  --location $LOCATION \
  --sku standard \
  --output none

# Build DATABASE_URL
DATABASE_URL="postgresql+asyncpg://${DB_ADMIN}:${DB_PASSWORD}@${DB_SERVER_NAME}.postgres.database.azure.com:5432/${DB_NAME}"

# Generate secrets
SECRET_KEY=$(openssl rand -hex 32)
JWT_SECRET=$(openssl rand -hex 32)
GROQ_API_KEY="YOUR_GROQ_API_KEY_HERE"  # Replace with your actual key

# Store secrets
echo "📝 Storing secrets in Key Vault..."
az keyvault secret set --vault-name $KV_NAME --name DATABASE-URL --value "$DATABASE_URL" --output none
az keyvault secret set --vault-name $KV_NAME --name SECRET-KEY --value "$SECRET_KEY" --output none
az keyvault secret set --vault-name $KV_NAME --name JWT-SECRET --value "$JWT_SECRET" --output none
az keyvault secret set --vault-name $KV_NAME --name GROQ-API-KEY --value "$GROQ_API_KEY" --output none
echo "✓ Key Vault created with secrets"

# ========== 6. WEB APP BACKEND ==========
echo "🌐 Creating Web App for Backend: $BACKEND_APP_NAME..."
az webapp create \
  --resource-group $RG_NAME \
  --plan $APP_PLAN_NAME \
  --name $BACKEND_APP_NAME \
  --runtime "PYTHON:3.11" \
  --output none

# Enable managed identity
echo "🔑 Configuring managed identity..."
az webapp identity assign \
  --name $BACKEND_APP_NAME \
  --resource-group $RG_NAME \
  --output none

# Get principal ID
PRINCIPAL_ID=$(az webapp identity show \
  --name $BACKEND_APP_NAME \
  --resource-group $RG_NAME \
  --query principalId -o tsv)

# Grant Key Vault access
az keyvault set-policy \
  --name $KV_NAME \
  --object-id $PRINCIPAL_ID \
  --secret-permissions get list \
  --output none

# Configure app settings with Key Vault references
echo "⚙️  Configuring app settings..."
az webapp config appsettings set \
  --name $BACKEND_APP_NAME \
  --resource-group $RG_NAME \
  --settings \
  DATABASE_URL="@Microsoft.KeyVault(SecretUri=https://${KV_NAME}.vault.azure.net/secrets/DATABASE-URL/)" \
  SECRET_KEY="@Microsoft.KeyVault(SecretUri=https://${KV_NAME}.vault.azure.net/secrets/SECRET-KEY/)" \
  GROQ_API_KEY="@Microsoft.KeyVault(SecretUri=https://${KV_NAME}.vault.azure.net/secrets/GROQ-API-KEY/)" \
  JWT_SECRET="@Microsoft.KeyVault(SecretUri=https://${KV_NAME}.vault.azure.net/secrets/JWT-SECRET/)" \
  WEBSITES_PORT=8000 \
  PORT=8000 \
  ENVIRONMENT=production \
  --output none
echo "✓ Web App backend created and configured"

# ========== SUMMARY ==========
ACR_LOGIN_SERVER=$(az acr show --name $ACR_NAME --query loginServer -o tsv)
BACKEND_URL=$(az webapp show --name $BACKEND_APP_NAME --resource-group $RG_NAME --query defaultHostName -o tsv)

echo ""
echo "======================================"
echo "✅ DEPLOYMENT INFRASTRUCTURE READY!"
echo "======================================"
echo ""
echo "📊 RESOURCE SUMMARY:"
echo "  Resource Group: $RG_NAME"
echo "  Region: $LOCATION"
echo ""
echo "🔧 RESOURCES CREATED:"
echo "  ✓ PostgreSQL: $DB_SERVER_NAME.postgres.database.azure.com"
echo "  ✓ Container Registry: $ACR_LOGIN_SERVER"
echo "  ✓ Key Vault: $KV_NAME"
echo "  ✓ Backend Web App: https://$BACKEND_URL"
echo ""
echo "🚀 NEXT STEPS:"
echo ""
echo "1️⃣  BUILD & PUSH DOCKER IMAGE:"
echo "   az acr login --name $ACR_NAME"
echo "   az acr build --registry $ACR_NAME --image hackquest-backend:latest ."
echo ""
echo "2️⃣  CONFIGURE WEB APP CONTAINER:"
echo "   az webapp config container set \\"
echo "     --resource-group $RG_NAME \\"
echo "     --name $BACKEND_APP_NAME \\"
echo "     --docker-custom-image-name $ACR_LOGIN_SERVER/hackquest-backend:latest \\"
echo "     --docker-registry-server-url https://$ACR_LOGIN_SERVER"
echo ""
echo "3️⃣  UPDATE FRONTEND API URL TO:"
echo "   https://$BACKEND_URL"
echo ""
echo "======================================"

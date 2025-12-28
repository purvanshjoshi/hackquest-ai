#!/bin/bash
# Generate secure environment variables for HackQuest AI production deployment

echo "======================================"
echo "HackQuest AI - Environment Generator"
echo "======================================"
echo ""

# Function to generate secure random string
generate_secret() {
    openssl rand -hex 32
}

# Function to prompt user for input
prompt_input() {
    local prompt="$1"
    local default="$2"
    local input
    
    if [ -z "$default" ]; then
        read -p "$prompt: " input
    else
        read -p "$prompt [$default]: " input
        input="${input:-$default}"
    fi
    
    echo "$input"
}

echo "🔐 GENERATING SECURE ENVIRONMENT VARIABLES"
echo ""

# Generate secrets
SECRET_KEY=$(generate_secret)
JWT_SECRET=$(generate_secret)
DB_PASSWORD=$(openssl rand -base64 16)"Hq@2025!"

echo "✅ Generated:"
echo "   - SECRET_KEY: ${SECRET_KEY:0:16}... (32 chars)"
echo "   - JWT_SECRET: ${JWT_SECRET:0:16}... (32 chars)"
echo "   - DB_PASSWORD: ${DB_PASSWORD:0:10}... (20 chars)"
echo ""

# Prompt for user inputs
echo "📝 ENTER CONFIGURATION VALUES:"
echo ""

GROQ_API_KEY=$(prompt_input "🔑 Groq API Key" "")
PINECONE_API_KEY=$(prompt_input "🔑 Pinecone API Key (optional)" "")
PINECONE_ENV=$(prompt_input "🔑 Pinecone Environment (optional)" "")
FRONTEND_URL=$(prompt_input "🌐 Frontend URL" "https://hackquest-frontend.azurewebsites.net")
DB_SERVER=$(prompt_input "🗄️  PostgreSQL Server" "hackquest-db-server.postgres.database.azure.com")
DB_NAME=$(prompt_input "📊 Database Name" "hackquest_db")
DB_USER=$(prompt_input "👤 Database User" "dbadmin")

echo ""
echo "🔄 CREATING .env.production FILE..."
echo ""

# Create .env.production file
cat > .env.production << EOF
# ============================================
# HackQuest AI - Production Environment
# ============================================
# Generated: $(date)
# IMPORTANT: Keep this file secure and never commit to version control!

# Database Configuration
DATABASE_URL=postgresql+asyncpg://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}:5432/${DB_NAME}

# Security
SECRET_KEY=${SECRET_KEY}
JWT_SECRET=${JWT_SECRET}
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# API Keys
GROQ_API_KEY=${GROQ_API_KEY}
PINECONE_API_KEY=${PINECONE_API_KEY}
PINECONE_ENVIRONMENT=${PINECONE_ENV}

# Service Configuration
ENVIRONMENT=production
DEBUG=False
LOG_LEVEL=info

# Frontend URL (for CORS)
FRONTEND_URL=${FRONTEND_URL}

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
API_WORKERS=4
API_TIMEOUT=60

# Database Configuration
DB_ECHO=False
DB_POOL_SIZE=20
DB_MAX_OVERFLOW=10

# Rate Limiting
RATE_LIMIT_ENABLED=True
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_PERIOD=60
EOF

echo "✅ Created: .env.production"
echo ""

# Create frontend .env.production
cat > frontend/.env.production << EOF
# Frontend Production Configuration
# Generated: $(date)

VITE_API_BASE_URL=${FRONTEND_URL%/}/api
VITE_ENV=production
VITE_LOG_LEVEL=error
VITE_ENABLE_ANALYTICS=true
EOF

echo "✅ Created: frontend/.env.production"
echo ""

# Create a backup with masked secrets
cat > .env.production.template << EOF
# ============================================
# HackQuest AI - Production Environment Template
# ============================================
# This is a TEMPLATE - fill in actual values before deployment

# Database Configuration
DATABASE_URL=postgresql+asyncpg://USERNAME:PASSWORD@SERVER:5432/DATABASE

# Security (generate with: openssl rand -hex 32)
SECRET_KEY=YOUR_SECRET_KEY_HERE_MIN_32_CHARS
JWT_SECRET=YOUR_JWT_SECRET_HERE_MIN_32_CHARS
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# API Keys
GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE
PINECONE_API_KEY=YOUR_PINECONE_API_KEY_HERE
PINECONE_ENVIRONMENT=YOUR_PINECONE_ENVIRONMENT_HERE

# Service Configuration
ENVIRONMENT=production
DEBUG=False
LOG_LEVEL=info

# Frontend URL (for CORS)
FRONTEND_URL=https://your-frontend-url.com

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
API_WORKERS=4
API_TIMEOUT=60

# Database Configuration
DB_ECHO=False
DB_POOL_SIZE=20
DB_MAX_OVERFLOW=10

# Rate Limiting
RATE_LIMIT_ENABLED=True
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_PERIOD=60
EOF

echo "✅ Created: .env.production.template (for version control)"
echo ""

# Create secrets summary
cat > .env.secrets.summary << EOF
# ============================================
# HackQuest AI - Environment Summary
# ============================================
# Generated: $(date)
# Keep this file SECURE - contains sensitive information

DATABASE URL
  Server: ${DB_SERVER}
  Database: ${DB_NAME}
  Username: ${DB_USER}
  Password: [GENERATED - ${DB_PASSWORD:0:10}...]

SECRETS
  SECRET_KEY: ${SECRET_KEY:0:16}...
  JWT_SECRET: ${JWT_SECRET:0:16}...

API KEYS
  GROQ_API_KEY: ${GROQ_API_KEY:0:10}...
  PINECONE_API_KEY: ${PINECONE_API_KEY:0:10}...

FRONTEND
  URL: ${FRONTEND_URL}

DATABASE CONNECTION STRING
  postgresql+asyncpg://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}:5432/${DB_NAME}
EOF

echo "✅ Created: .env.secrets.summary (for reference)"
echo ""

# Display summary
echo "======================================"
echo "✅ ENVIRONMENT GENERATION COMPLETE"
echo "======================================"
echo ""
echo "📋 FILES CREATED:"
echo "   1. .env.production (production config)"
echo "   2. frontend/.env.production (frontend config)"
echo "   3. .env.production.template (for git)"
echo "   4. .env.secrets.summary (for reference)"
echo ""

echo "⚠️  SECURITY REMINDERS:"
echo "   • .env.production contains sensitive data"
echo "   • NEVER commit .env.production to git"
echo "   • Use .env.production.template in version control"
echo "   • Store passwords securely (Azure Key Vault)"
echo "   • Rotate secrets every 90 days"
echo ""

echo "🚀 NEXT STEPS:"
echo "   1. Review .env.production file:"
echo "      cat .env.production"
echo ""
echo "   2. Verify all values are correct"
echo ""
echo "   3. Add to .gitignore if not already:"
echo "      echo '.env.production' >> .gitignore"
echo ""
echo "   4. Deploy using deploy-azure.sh"
echo ""

echo "📝 SAVE THESE CREDENTIALS SECURELY:"
echo ""
echo "Database Password:"
echo "   ${DB_PASSWORD}"
echo ""
echo "SECRET_KEY:"
echo "   ${SECRET_KEY}"
echo ""
echo "JWT_SECRET:"
echo "   ${JWT_SECRET}"
echo ""
echo "======================================"

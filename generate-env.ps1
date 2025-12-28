# HackQuest AI - Environment Generator (PowerShell)
# Generates secure environment variables for production deployment

Write-Host "======================================"
Write-Host "HackQuest AI - Environment Generator"
Write-Host "======================================"
Write-Host ""

# Function to generate secure random string
function Generate-SecureSecret {
    param([int]$Length = 32)
    $charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    $random = New-Object System.Random
    $secret = ""
    for ($i = 0; $i -lt $Length; $i++) {
        $secret += $charSet[$random.Next($charSet.Length)]
    }
    return $secret
}

Write-Host "🔐 GENERATING SECURE ENVIRONMENT VARIABLES"
Write-Host ""

# Generate secrets
$SECRET_KEY = Generate-SecureSecret -Length 32
$JWT_SECRET = Generate-SecureSecret -Length 32
$DB_PASSWORD = "$(Generate-SecureSecret -Length 16)Hq@2025!"

Write-Host "✅ Generated:"
Write-Host "   - SECRET_KEY: $($SECRET_KEY.Substring(0,16))... (32 chars)"
Write-Host "   - JWT_SECRET: $($JWT_SECRET.Substring(0,16))... (32 chars)"
Write-Host "   - DB_PASSWORD: $($DB_PASSWORD.Substring(0,10))... (20 chars)"
Write-Host ""

# Prompt for user inputs
Write-Host "📝 ENTER CONFIGURATION VALUES:"
Write-Host ""

$GROQ_API_KEY = Read-Host "🔑 Groq API Key"
$PINECONE_API_KEY = Read-Host "🔑 Pinecone API Key (press Enter to skip)"
$PINECONE_ENV = Read-Host "🔑 Pinecone Environment (press Enter to skip)"
$FRONTEND_URL = Read-Host "🌐 Frontend URL (default: https://hackquest-frontend.azurewebsites.net)"
$FRONTEND_URL = if ($FRONTEND_URL) { $FRONTEND_URL } else { "https://hackquest-frontend.azurewebsites.net" }

$DB_SERVER = Read-Host "🗄️  PostgreSQL Server (default: hackquest-db-server.postgres.database.azure.com)"
$DB_SERVER = if ($DB_SERVER) { $DB_SERVER } else { "hackquest-db-server.postgres.database.azure.com" }

$DB_NAME = Read-Host "📊 Database Name (default: hackquest_db)"
$DB_NAME = if ($DB_NAME) { $DB_NAME } else { "hackquest_db" }

$DB_USER = Read-Host "👤 Database User (default: dbadmin)"
$DB_USER = if ($DB_USER) { $DB_USER } else { "dbadmin" }

Write-Host ""
Write-Host "🔄 CREATING .env.production FILE..."
Write-Host ""

# Create .env.production file
$envContent = @"
# ============================================
# HackQuest AI - Production Environment
# ============================================
# Generated: $(Get-Date)
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
"@

Set-Content -Path ".env.production" -Value $envContent
Write-Host "✅ Created: .env.production"
Write-Host ""

# Create frontend .env.production
$frontendEnv = @"
# Frontend Production Configuration
# Generated: $(Get-Date)

VITE_API_BASE_URL=${FRONTEND_URL}/api
VITE_ENV=production
VITE_LOG_LEVEL=error
VITE_ENABLE_ANALYTICS=true
"@

Set-Content -Path "frontend\.env.production" -Value $frontendEnv
Write-Host "✅ Created: frontend\.env.production"
Write-Host ""

# Create safe template for git
$templateContent = @"
# ============================================
# HackQuest AI - Production Environment Template
# ============================================
# This is a TEMPLATE - fill in actual values before deployment

# Database Configuration
DATABASE_URL=postgresql+asyncpg://USERNAME:PASSWORD@SERVER:5432/DATABASE

# Security (generate with: [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([System.Guid]::NewGuid().ToString() + [System.Guid]::NewGuid().ToString())))
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
"@

Set-Content -Path ".env.production.template" -Value $templateContent
Write-Host "✅ Created: .env.production.template (for version control)"
Write-Host ""

# Create secrets summary
$summaryContent = @"
# ============================================
# HackQuest AI - Environment Summary
# ============================================
# Generated: $(Get-Date)
# Keep this file SECURE - contains sensitive information

DATABASE URL
  Server: ${DB_SERVER}
  Database: ${DB_NAME}
  Username: ${DB_USER}
  Password: [GENERATED - $($DB_PASSWORD.Substring(0,10))...]

SECRETS
  SECRET_KEY: $($SECRET_KEY.Substring(0,16))...
  JWT_SECRET: $($JWT_SECRET.Substring(0,16))...

API KEYS
  GROQ_API_KEY: $($GROQ_API_KEY.Substring(0,10))...
  PINECONE_API_KEY: $($PINECONE_API_KEY.Substring(0,10))...

FRONTEND
  URL: ${FRONTEND_URL}

DATABASE CONNECTION STRING
  postgresql+asyncpg://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}:5432/${DB_NAME}
"@

Set-Content -Path ".env.secrets.summary" -Value $summaryContent
Write-Host "✅ Created: .env.secrets.summary (for reference)"
Write-Host ""

Write-Host "======================================"
Write-Host "✅ ENVIRONMENT GENERATION COMPLETE"
Write-Host "======================================"
Write-Host ""
Write-Host "📋 FILES CREATED:"
Write-Host "   1. .env.production (production config)"
Write-Host "   2. frontend\.env.production (frontend config)"
Write-Host "   3. .env.production.template (for git)"
Write-Host "   4. .env.secrets.summary (for reference)"
Write-Host ""

Write-Host "⚠️  SECURITY REMINDERS:"
Write-Host "   • .env.production contains sensitive data"
Write-Host "   • NEVER commit .env.production to git"
Write-Host "   • Use .env.production.template in version control"
Write-Host "   • Store passwords securely (Azure Key Vault)"
Write-Host "   • Rotate secrets every 90 days"
Write-Host ""

Write-Host "📝 SAVE THESE CREDENTIALS SECURELY:"
Write-Host ""
Write-Host "Database Password:"
Write-Host "   ${DB_PASSWORD}"
Write-Host ""
Write-Host "SECRET_KEY:"
Write-Host "   ${SECRET_KEY}"
Write-Host ""
Write-Host "JWT_SECRET:"
Write-Host "   ${JWT_SECRET}"
Write-Host ""
Write-Host "======================================"

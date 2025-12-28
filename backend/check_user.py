"""Check test user in MongoDB"""
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
db = client['hackquest']
users = db['users']

# Check if test user exists
user = users.find_one({'email': 'test@example.com'})

if user:
    print('✅ Test user found in MongoDB:')
    print(f'   Email: {user.get("email")}')
    print(f'   Username: {user.get("username")}')
    print(f'   Has password hash: {bool(user.get("password_hash"))}')
    print(f'   Is active: {user.get("is_active")}')
else:
    print('❌ Test user NOT found in MongoDB')
    print('Creating test user now...')
    
    # Create test user with proper password hashing
    from passlib.context import CryptContext
    
    pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
    
    test_user = {
        'email': 'test@example.com',
        'username': 'testuser',
        'password_hash': pwd_context.hash('password123'),
        'full_name': 'Test User',
        'avatar_url': None,
        'github_username': None,
        'skills': ['Python', 'FastAPI', 'React'],
        'bio': 'Test account',
        'created_at': None,
        'updated_at': None,
        'is_active': True,
    }
    
    try:
        result = users.insert_one(test_user)
        print(f'✅ Test user created with ID: {result.inserted_id}')
    except Exception as e:
        print(f'Error creating user: {e}')

# List all users
count = users.count_documents({})
print(f'\n📊 Total users in database: {count}')

if count > 0:
    print('\n📋 All users:')
    for u in users.find():
        print(f'   - {u.get("email")} ({u.get("username")})')

client.close()

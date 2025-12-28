import sqlite3
import bcrypt
from datetime import datetime

# Connect to SQLite
conn = sqlite3.connect('auth.db')
cursor = conn.cursor()

# Check if users table exists
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='user'")
table_exists = cursor.fetchone()

if table_exists:
    print("[OK] Users table exists\n")
    
    # Check existing users
    cursor.execute("SELECT id, email, username FROM user")
    users = cursor.fetchall()
    print(f"Total users: {len(users)}")
    for user in users:
        print(f"  - {user[1]} ({user[2]})")
    
    # Check for test user
    cursor.execute("SELECT * FROM user WHERE email = 'test@example.com'")
    test_user = cursor.fetchone()
    
    if test_user:
        print("\n[OK] Test user exists!")
    else:
        print("\n[WARNING] Test user does not exist - creating...")
        
        # Create test user
        password = "password123"
        password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
        now = datetime.utcnow().isoformat()
        
        cursor.execute("""
            INSERT INTO user (email, username, password_hash, full_name, is_active, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, ('test@example.com', 'testuser', password_hash, 'Test User', 1, now, now))
        
        conn.commit()
        print("[OK] Test user created!")
        print("  Email: test@example.com")
        print("  Password: password123")
else:
    print("[ERROR] Users table does not exist - database might not be initialized")
    print("\nTables in database:")
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    for table in tables:
        print(f"  - {table[0]}")

conn.close()

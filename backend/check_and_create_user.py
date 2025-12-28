import sqlite3
import bcrypt
from datetime import datetime

print("Checking hackquest.db...\n")

conn = sqlite3.connect('hackquest.db')
cursor = conn.cursor()

# Get all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()
print(f"Tables in hackquest.db: {len(tables)}")
for table in tables:
    print(f"  - {table[0]}")

# Check user table
if any('user' in t[0].lower() for t in tables):
    cursor.execute("SELECT COUNT(*) FROM user")
    count = cursor.fetchone()[0]
    print(f"\nUsers in table: {count}")
    
    if count > 0:
        cursor.execute("SELECT id, email, username FROM user LIMIT 5")
        users = cursor.fetchall()
        for user in users:
            print(f"  - {user[1]} ({user[2]})")
    
    # Check for test user
    cursor.execute("SELECT * FROM user WHERE email = 'test@example.com'")
    test_user = cursor.fetchone()
    
    if not test_user:
        print("\nCreating test user...")
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
        print("\n[OK] Test user already exists!")
else:
    print("\n[ERROR] No user table found!")

conn.close()

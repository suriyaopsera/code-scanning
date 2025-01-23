import sqlite3
import hashlib

# SQL Injection
def vulnerable_sql(user_input):
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE username = '{user_input}'"  # Vulnerable
    cursor.execute(query)
    print(cursor.fetchall())

# Insecure Hashing
def insecure_hashing(password):
    hashed_password = hashlib.md5(password.encode()).hexdigest()  # Weak hashing algorithm
    print(f"MD5 Hashed Password: {hashed_password}")

# Example Usage
vulnerable_sql("'; DROP TABLE users; --")
insecure_hashing("password123")

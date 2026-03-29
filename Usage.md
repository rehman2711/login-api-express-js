# Create Database

#### MYSQL Database -

1. Create the database in XAAMP :
   - Do it manually or use query

```sql
CREATE DATABASE database_name
```

---

2. Create the table in Database :
   - This also do it manually or use query

```sql
CREATE TABLE user(id int PRIMARY KEY AUTO_INCREMENT , username VARCHAR(255), password VARCHAR(255))
```

---

3. Insert Records in that table :
   - This also do it manually or use query

```sql
INSERT INTO user (id , username , password) VALUES ("1","rehman","rehman4444") , ("2","vikesh","vikesh6767")
```

---

# Remote Database Hosting -

1. Redirect to this url - https://www.freesqldatabase.com

2. Signup using Jaguar-Email-Address and Password

3. Create a Database as a free tier then you will receive an Email of username , password , database-name all information needed while configuration of database in db.js.

![Free SQL Database Account](/public/free_sql_database_account.png)

4. Open php my Admin online on - https://www.phpmyadmin.co/index.php

5. Fill the information like username , password and everything by referencing the email received .

![Filling Information](/public/filling-information-to-phpmyadmin.png)

6. Once you logged in to php my admin .

7. You have the database , create a table and insert few records by writing query .

![phpMyAdmin Interface](/public//phpmyadmin-interface.png)

8. Your remote database is is there in your services

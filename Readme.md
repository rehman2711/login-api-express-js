## 🧩 Let’s build YOUR login API properly

1. config/db.js

```js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
});
module.exports = pool;
```

---

2. services/authService.js

👉 ONLY business logic + DB calls

```js
const connection = require("../config/db");
const getUserByUsername = async (username) => {
  const query = `SELECT * FROM user WHERE username = ?`;
  const [rows] = await connection.execute(query, [username]);
  return rows[0];
};

module.exports = {
  getUserByUsername,
};
```

---

3. controllers/authController.js

👉 Handles req/res ONLY

```js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getUserByUsername } = require("../services/authService");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.MY_SECRET,
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  login,
};
```

---

4. routes/authRoutes.js

👉 ONLY routing

```js
const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);
```

---

module.exports = router; 5. app.js

```js
const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

module.exports = app;
📁 6. server.js
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port", PORT);
});
```

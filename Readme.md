# Login API (Express.js)

A structured authentication API built using Express.js with JWT-based authentication and clean backend architecture.

### Description

This project implements a login system using JSON Web Tokens (JWT) for authentication. It follows a modular architecture by separating routes, controllers, services, and middleware to ensure scalability and maintainability.

### Live Endpoint

https://login-api-express-js.onrender.com/api/v2/login

### POST `/api/v2/login`

1. Request Body -

```js
{
  "username": "rehman",
  "password": "rehman44"
}
```

2. Response Body -

```js
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyZWhtYW4iLCJpYXQiOjE3NzQ3NzY5NDEsImV4cCI6MTc3NDc4MDU0MX0.3agLOin21F3AJw2nVj0SEW17PdKvy8bN7986Z7QgVaQ"
}

```

### Tech Stack

1. Node.js
2. Express.js
3. JSON Web Token (JWT)
4. JavaScript (ES6+)

### Structure

1. controllers → Handles request/response
2. services → Business logic
3. routes → API endpoints
4. middlewares → Error & auth handling
5. config → Environment setup

### Authentication Flow

1. User sends username & password
2. Server validates credentials
3. JWT token is generated
4. Token is returned to client
5. Client uses token for protected routes

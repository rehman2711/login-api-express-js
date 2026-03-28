# Login API (Express.js)

A structured authentication API built using Express.js with JWT-based authentication and clean backend architecture.

### Description

This project implements a login system using JSON Web Tokens (JWT) for authentication. It follows a modular architecture by separating routes, controllers, services, and middleware to ensure scalability and maintainability.

### Live Endpoint

https://login-api-express-js.onrender.com/api/v2/login

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

### POST `/api/v2/login`

1. Request Body -

```js
{
  "email": "rehman",
  "password": "rehman4444"
}
```

2. Response Body -

```js
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

### Authentication Flow

1. User sends email & password
2. Server validates credentials
3. JWT token is generated
4. Token is returned to client
5. Client uses token for protected routes

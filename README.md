# User Management API (Express.js)

This is a basic RESTful API built using **Express.js** for managing users. It allows you to perform CRUD operations (Create, Read, Update, Delete) on a sample in-memory user list.

## Features

- Get all users
- Get a user by ID
- Add a new user
- Update an existing user
- Delete a user
- Uses UUID for unique user IDs
- CORS enabled for cross-origin requests

---

## Installation

1. **Clone the repository**

```bash
   git clone <repository-url>
   cd <project-folder>
```
2. **Install dependencies**

```
npm install
```
3. **Run the server**

```
node index.js  or  npx nodemon index.js

``
 The server will run at:http://localhost:3000

 API Endpoints
GET /
 - Default route to test the connection.
GET /users
- Get all users.
GET /users/:id
- Get a specific user by ID.
POST /users
- Add a new user.
PUT /users/:id
- Update a user's name and approval status.
DELETE /users/:id
- Delete a user by ID.

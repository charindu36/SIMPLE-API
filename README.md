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
### The server will run at:http://localhost:3000

## API Endpoints
-1. GET /
Default route to test the connection.
-2. GET /users
Get all users.
3. GET /users/:id
Get a specific user by ID.
4. POST /users
Add a new user.
5. PUT /users/:id
Update a user's name and approval status.
6. DELETE /users/:id
Delete a user by ID.
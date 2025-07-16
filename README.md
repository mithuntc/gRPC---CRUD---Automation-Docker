# gRPC-CRUD-Automation-Docker

This project demonstrates a simple gRPC server and client implementation using Node.js, performing full CRUD operations (Create, Read, Update, Delete) on a user entity. It also includes a Docker setup to containerize and run the entire solution for test automation and backend validation workflows.

---

## 📌 Features

- 🚀 Built with **Node.js** and **@grpc/grpc-js**
- 📄 Uses **Protocol Buffers** (`.proto`) to define gRPC services
- 🧪 Automates Create, Read, Update, and Delete operations
- 🐳 Fully Dockerized for isolated and reproducible testing
- ✅ Ideal for backend testers exploring gRPC-based API automation

------------------------------------------------------------------------------------------------------------------------------------

## 📦 Folder Structure
grpc-crud-automation-docker/
├── proto/
│ └── user.proto
├── server/
│ └── server.js
├── client/
│ └── client.js
├── Dockerfile
├── package.json
└── README.md

---

## ⚙️ Prerequisites

- Node.js ≥ 18
- Docker Desktop (if running in container)
- Git (to clone this repo)

---

## 🛠️ Setup Instructions (Without Docker)

### 1. Clone the Repository

```bash
git clone https://github.com/mithuntc/gRPC---CRUD---Automation-Docker.git

2. Install Dependencies
npm install

3. Start the gRPC Server
node server/server.js

4. Run the gRPC Client
node client/client.js

Running via Docker
1. Build Docker Image
docker build -t grpc-test-project .
2. Run Docker Container
docker run -p 50051:50051 grpc-test-project
The container will expose the gRPC server on port 50051.
-----------------------------------------------------------------------------------------------
🧪 Example Use Cases (Handled by Client)
✅ CreateUser: Add a new user

🔍 GetUser: Fetch details by ID

✏️ UpdateUser: Modify existing user info

❌ DeleteUser: Remove user by ID
------------------------------------------------------------------------------------------------
📄 Proto Definition
service UserService {
  rpc CreateUser (UserRequest) returns (UserResponse);
  rpc GetUser (UserId) returns (UserResponse);
  rpc UpdateUser (UserRequest) returns (UserResponse);
  rpc DeleteUser (UserId) returns (DeleteResponse);
}
----------------------------------------------------------------------------------------------

🧠 Why This Project?
This repo was created to demonstrate backend QA automation skills using:

gRPC communication flow

JavaScript-based service testing

Docker containerization for CI/CD compatibility

It aligns with real-world backend QA tasks in modern microservice architectures.



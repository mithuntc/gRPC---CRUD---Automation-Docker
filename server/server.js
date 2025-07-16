const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, '../proto/user.proto');
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userService = grpcObject.userservice;

const users = {};

function AddUser(call, callback) {
  const { userId, name, email } = call.request;
  users[userId] = { name, email };
  callback(null, { message: "User added", userId, name, email });
}

function GetUser(call, callback) {
  const { userId } = call.request;
  const user = users[userId];
  if (user) {
    callback(null, { message: "User found", userId, name: user.name, email: user.email });
  } else {
    callback(null, { message: "User not found", userId });
  }
}

function UpdateUser(call, callback) {
  const { userId, name, email } = call.request;
  if (users[userId]) {
    users[userId] = { name, email };
    callback(null, { message: "User updated", userId, name, email });
  } else {
    callback(null, { message: "User not found", userId });
  }
}

function DeleteUser(call, callback) {
  const { userId } = call.request;
  if (users[userId]) {
    delete users[userId];
    callback(null, { message: "User deleted", userId });
  } else {
    callback(null, { message: "User not found", userId });
  }
}

const server = new grpc.Server();
server.addService(userService.UserService.service, {
  AddUser,
  GetUser,
  UpdateUser,
  DeleteUser
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error("Failed to bind server:", err);
    return;
  }
  console.log(`gRPC UserService server running on port ${port}`);
});

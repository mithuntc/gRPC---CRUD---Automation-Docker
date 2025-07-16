const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, '../proto/user.proto');
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userService = grpcObject.userservice;

const client = new userService.UserService("localhost:50051", grpc.credentials.createInsecure());

function testCRUD() {
  const user = { userId: "u123", name: "Midhun", email: "midhun@example.com" };

  client.AddUser(user, (err, res) => {
    console.log("AddUser:", res);

    client.GetUser({ userId: user.userId }, (err, res) => {
      console.log("GetUser:", res);

      client.UpdateUser({ ...user, name: "Midhun TC" }, (err, res) => {
        console.log("UpdateUser:", res);
         console.log("UpdatedUser Info:", res);

        client.DeleteUser({ userId: user.userId }, (err, res) => {
          console.log("DeleteUser:", res);
        });
      });
    });
  });
}

testCRUD();

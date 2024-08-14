const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/helloworld.proto', {});
const helloWorld = grpc.loadPackageDefinition(packageDefinition).helloWorld;

// Create a server
const server = new grpc.Server();

// Add the service
server.addService(helloWorld.Greeter.service, {SayHello});

server.bindAsync('0.0.0.0:9091', grpc.ServerCredentials.createInsecure(), () => {
	console.log("Server running at http://127.0.0.1:9091");
	server;
}); // our sever is insecure, no ssl configuration


function SayHello(call, callback) {
	const message = call.request.message;
	const helloObject = {message};
	callback(null, helloObject);
}

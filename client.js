// Node client

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./proto/bookStore.proto', {});
const bookStorePackage = grpc.loadPackageDefinition(packageDefinition).bookStorePackage;

const client = new bookStorePackage.BookService('localhost:9090', grpc.credentials.createInsecure());

client.createBook({ 'id': -1, 'book': 'Cracking the Interview' }, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`From server`, JSON.stringify(response));
    }
});

client.readBook({ 'id': 1 }, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`From server`, JSON.stringify(response));
    }
});

client.readBooks(null, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`From server`, JSON.stringify(response));
    }
})
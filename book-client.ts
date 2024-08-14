// browser client to be bundled

import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { BookServiceClient } from "./proto/bookStore_pb.client";
import { GreeterClient } from "./proto/helloworld_pb.client";

let transport = new GrpcWebFetchTransport({
  baseUrl: "http://192.168.100.103:8080",
});
let bookClient = new BookServiceClient(transport);
let greeterClient = new GreeterClient(transport);

const main = async () => {

  let { response } = await bookClient.createBook({ id: 1, book: "text book" });
  console.log("create book ", response);

  let a = await bookClient.readBooks({});
  console.log("books ", a.response);

  let b = await greeterClient.sayHello({message: "Tomas"});
  console.log("Greet ", b.response);
};

main()
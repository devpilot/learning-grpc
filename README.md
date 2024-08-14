```
docker run --rm -it \
      -p 9901:9901 \
      -p 10000:10000 \
      envoyproxy/envoy:dev
```

create bundle to include in html
```
npx webpack book-client.js
```

generate with protobuf-ts
```
npx protoc --ts_out proto --ts_opt  add_pb_suffix --ts_opt long_type_string --ts_opt optimize_code_size --proto_path proto proto/bookStore.proto 
```
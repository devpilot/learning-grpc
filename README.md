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
// browser client to be bundled

const { BookItem, Empty, BookRequest } = require('./proto/bookStore_pb.js');
const { BookServiceClient } = require('./proto/bookStore_grpc_web_pb.js');

var bookService = new BookServiceClient('http://localhost:8080');

var request = new BookRequest();
request.setId(1);

var bookItem = new BookItem()
bookItem.setId(-1)
bookItem.setBook("Book of evil")

bookService.createBook(bookItem, {}, function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(response.toObject());
    }
});

bookService.readBooks(new Empty(), {}, function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(response.toObject());
    }
});
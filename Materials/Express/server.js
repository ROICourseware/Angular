const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const api = require('./src/routes/api');

const app = express();

app.use(session({ 
    secret: 'bookreactionsexpress', 
    saveUninitialized: true,
    resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable('etag'); 

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
    next();
})

process.on('uncaughtException', function (err) {
    if (err) console.log(err, err.stack);
});


// JSON API
var baseUrl = '/api/bookreactions/';

app.get(baseUrl + 'Books', api.books);
app.get(baseUrl + 'Books/:bookId', api.book);
app.get(baseUrl + 'BooksByTitle/:title', api.booksByTitle);
app.get(baseUrl + 'Reviews/:bookId', api.reviews);

app.post(baseUrl + 'Reviews', api.addReview);
app.post(baseUrl + 'Books', api.addBook);


// Start
app.listen(3000, function () {
    console.log("Book Reactions Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

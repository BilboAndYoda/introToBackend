const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/bye', function(req, res) {
    res.send('Bye World!');
});

app.get('/dog', function(req, res) {
    res.send('Meow');
    console.log("Someone made a request to /dog");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started, Listening on ' + process.env.PORT +
        ', IP ' + process.env.IP);
});

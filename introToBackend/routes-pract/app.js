var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
})

app.get('/speak/:animal', function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: 'oink',
        cow: 'moo',
        dog: 'bark'
    }

    res.send('The ' + animal + ' says ' + sounds[animal]);
})

app.get('/repeat/:word/:total', function(req, res) {
    var word = req.params.word;
    var total = req.params.total;
    var s = '';

    for (var i = 0; i < total; i++) {
        s += word + " ";
    }

    res.send(s);
})

app.get('*', function(req, res) {
    res.send('what???');
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started, Listening on ' + process.env.PORT +
        ', IP ' + process.env.IP);
});

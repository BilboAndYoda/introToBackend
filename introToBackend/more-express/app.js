var express = require('express')
var app = express()

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/youfellinlovewith/:dog', function(req, res) {
    var dog = req.params.dog.toLowerCase();
    res.render('love', { dog });
})

app.get('/posts', function(req, res) {
    var posts = [
        { title: "Post 1", author: 'Susy' },
        { title: "Post 1", author: 'Susy' },
        { title: "Post 1", author: 'Susy' }
    ];

    res.render("posts", { posts: posts });
})





app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started, Listening on ' + process.env.PORT +
        ', IP ' + process.env.IP);
});

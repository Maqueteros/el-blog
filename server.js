var express = require('express'),
    path    = require('path'),
    http    = require('http'),
    m       = require('./server/routes')
    _       = require('underscore');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/post', m.findAll);
/*app.get('/post/:id', m.findById);
app.post('/post', m.addPost);
app.put('/post/:id', m.updatePost);
app.delete('/post/:id', m.deletePost);*/

http.createServer(app).listen(app.get('port'), function () {
    console.log("Maqueteros esta en http://localhost:" + app.get('port'));
});

var serve = require('koa-static');
var koa = require('koa');
var app = new koa();

app.use(serve(__dirname + '/public'));

app.listen(3000);
console.log('listening on port 3000');
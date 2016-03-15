var Handlebars = require('handlebars');
var partial    = require('./test.html');
var template   = Handlebars.compile(partial);

console.log(template({title: 'test', body: 'test'}));
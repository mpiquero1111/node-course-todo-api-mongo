var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user.js');

var app =express();

app.use(bodyParser.json());

//going to use post to setup a route using the / for posting
app.post('/todos', (request, response) => {
  console.log(request.body);
  var todo = new Todo({
    text: request.body.text
  });

  todo.save().then((doc) => {
    //success
    response.send(doc);
  }, (e) => {
    //error
    response.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Server started at 3000');
})

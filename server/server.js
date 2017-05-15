var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //console.log(req.params);
  if (!ObjectID.isValid(id)) {
    //id is invalid
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      //id not found
      return res.status(404).send();
    }
    //it's good
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = {app};

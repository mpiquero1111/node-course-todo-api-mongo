// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) =>{
  if (error) {
    return console.log(error, 'unable to connect to mongo server');
  }
  console.log('Now connected to mongodb');

  // db.collection('Todos')
  //   .deleteMany({text: "Some kind of text"})
  //   .then((results) =>{
  //     console.log(results);
  // });
  //
  // db.collection('Todos')
  //   .deleteOne({text: "Some kind of text2"})
  //   .then((results) =>{
  //     console.log(results.ok);
  // });

  // db.collection('Todos')
  //   .findOneAndDelete({completed: false})
  //   .then((results) =>{
  //     console.log(results);
  // });

  db.close();
});

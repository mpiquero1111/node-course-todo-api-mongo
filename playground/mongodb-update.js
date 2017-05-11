const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) =>{
  if (error) {
    return console.log(error, 'unable to connect to mongo server');
  }
  console.log('Now connected to mongodb');

//findOneAndUpdate will send to the db
//findOneAndUpdate(filter, update, options, callback)
  // db.collection('Todos')
  // .findOneAndUpdate({completed: false},
  //   {$set:{completed: true}},
  //   {returnOriginal: false})
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users')
  .findOneAndUpdate({completed: false},
    {$set:{name: 'Mr Awesome'}},
    {returnOriginal: false})
  .then((result) => {
    console.log(result);
  });

  db.close();
});

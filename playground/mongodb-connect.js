// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) =>{
  if (error) {
    return console.log(error, 'unable to connect to mongo server');
  }
  console.log('Now connected to mongodb');

  db.collection('Users')
  .find()
  .count()
  .then((count) => {
    console.log(`Users Count ${count}`);
  }, (error) => {
    console.log(error);
  });


  db.collection('Users')
  .find({completed: false})
  .toArray()
  .then((docs) => {
    console.log('Users ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log(error);
  });


//to use ObjectIDs, we can do this

// db.collection('Users')
// .find({
//   _id: new ObjectID("59135b2dcd494828b02d3b2e")
// })
// .toArray()
// .then((docs) => {
//   console.log('Users ');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (error) => {
//   console.log(error);
// });


  // db.collection('Todos').insertOne({
  //   text: 'Some kind of text',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log(error, 'log insert error');
  //   }
  //   console.log('Successfully inserted ', JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   user: 'Manny P',
  //   email: 'mp@gmail.com',
  //   completed: true
  // }, (error, result) => {
  //   if (error) {
  //     return console.log(error, 'log insert error');
  //   }
  //   console.log('Successfully inserted ', JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  db.close();
});

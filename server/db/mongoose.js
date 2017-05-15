var mongoose = require('mongoose');

//promise to mongoose to tell it which one to use
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
//MONGODB_URI: mongodb://heroku_z0kw4g1r:14tecfes8lku8h3smsaf8c77f5@ds143141.mlab.com:43141/heroku_z0kw4g1r
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp' );

module.exports = { mongoose };

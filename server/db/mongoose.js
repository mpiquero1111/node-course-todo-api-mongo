var mongoose = require('mongoose');

//promise to mongoose to tell it which one to use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };

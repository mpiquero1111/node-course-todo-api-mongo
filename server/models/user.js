var mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
  userID: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    isAsync: true,
    validate: [validator.isEmail, 'invalid email']
  }
});

module.exports = {User};

var bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    index: { unique: true }
  },
  bio: String
});

module.exports = mongoose.model('User', UserSchema);
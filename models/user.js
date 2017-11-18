const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  avatar: String,
  providerId: String,
  login: String,
  blog: String,
  email: String,
  location: String,
  displayName: String,
  bio: String,
  profileUrl: String
});

mongoose.model('users', userSchema);

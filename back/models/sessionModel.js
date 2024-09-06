const mongoose = require('mongoose');
const User = require("./userModel")

const sessionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: {  type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
  maxUsers : {type: Number,  required: true, min: 2},
  password: { type: String, required: true , select: false},
  isAdmin: {type: Boolean, required: true, select: true}

});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
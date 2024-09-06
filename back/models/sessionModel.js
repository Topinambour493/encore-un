const mongoose = require('mongoose');
const User = require("./userModel")
const Event = require("./eventModel")

const sessionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: {  type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
  maxUsers : {type: Number,  required: true, min: 2},
  event: {  type: mongoose.Schema.Types.ObjectId, ref: Event, required: true}

});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
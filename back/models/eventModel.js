const mongoose = require('mongoose');
const Session = require("./sessionModel");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String, required: true},
  image: { type: String, required: true},
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: Session, required: true}],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
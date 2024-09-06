const Event = require('../models/eventModel');

exports.addEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({message: 'Event ajouté avec succès', event});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Récupérer tous les utilisateurs
exports.getEvents = async (req, res) => {
  let events;
  try {
    const searchQuery = req.query.search || '';
    const regex = new RegExp(searchQuery, 'i');
    events = await Event.find({name:  { $regex: regex }});
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//Récuperer un event
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({message: "event not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};


exports.modifyEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(event)
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({message: "event not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Delete un event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (event) {
      res.status(204).json();
    } else {
      res.status(404).json({message: "event not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
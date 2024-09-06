const Session = require('../models/sessionModel');

exports.addSession = async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).json({message: 'Session ajouté avec succès', session});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Récupérer tous les utilisateurs
exports.getSessions = async (req, res) => {
  let sessions;
  try {
    const searchQuery = req.query.search || '';
    const regex = new RegExp(searchQuery, 'i');
    sessions = await Session.find({name:  { $regex: regex }});
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//Récuperer un session
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (session) {
      res.status(200).json(session);
    } else {
      res.status(404).json({message: "session not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};


exports.modifySession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(session)
    if (session) {
      res.status(200).json(session);
    } else {
      res.status(404).json({message: "session not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Delete un session
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (session) {
      res.status(204).json();
    } else {
      res.status(404).json({message: "session not found"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
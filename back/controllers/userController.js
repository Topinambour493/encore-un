const User = require('../models/userModel');
const {hashPassword} =  require("../utils/bcrypt");
const {generateToken} = require("../utils/jwt");

exports.addUser = async (req, res) => {
  try {
    req.body.isAdmin = false
    req.body.password = hashPassword(req.body.password )
    const user = new User(req.body);
    await user.save();
    let accessToken = generateToken(user.id, "access")
    let refreshToken = generateToken(user.id, "refresh")
    res.status(200).json({"accessToken": accessToken, "refreshToken": refreshToken});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
  let users;
  try {
    if (req.query.search) {
      const regex = new RegExp(req.query.search, 'i'); // 'i' pour rendre la recherche insensible à la casse

      users = await User.find({
        $or: [
          {firstname: regex},
          {lastname: regex}
        ]
      });
    } else {
      users = await User.find();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//Récuperer un user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: "user inconnu"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};


exports.modifyUser = async (req, res) => {
  try {
    req.body.isAdmin = undefined;
    console.log(req.user)
    const user = await User.findByIdAndUpdate(req.userId, req.body, {new: true});
    console.log(user)
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: "user inconnu"})
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

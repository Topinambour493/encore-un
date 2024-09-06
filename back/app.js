const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const cors = require('cors');
const isConnected = require('./middlewares/auth');

const app = express();

dotenv.config();

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/'+process.env.DB
).then(() => {
  console.log('Connexion à MongoDB réussie');
}).catch((error) => {
  console.log('Erreur de connexion à MongoDB :', error.message);
});

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users',isConnected, userRoutes);
app.use('/events', isConnected, eventRoutes);
app.use('/sessions', isConnected, sessionRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

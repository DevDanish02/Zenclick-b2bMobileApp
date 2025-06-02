const express = require('express');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/User.routes');
const rechargeRoutes = require('./routes/recharge.routes'); // Import recharge routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/recharge', rechargeRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to ZenKlick API</h1>');
});

// DB connection and server start
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully!');
    return sequelize.sync(); // Sync the models
  })
  .then(() => {
    // Start the server after DB sync
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '192.168.1.4', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if DB connection fails
  });

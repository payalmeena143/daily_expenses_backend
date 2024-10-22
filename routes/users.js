// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Create a new user
router.post('/api/users', async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const user = new User({ name, email, mobile });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve user details
router.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;  // Export the router to be used in the main app

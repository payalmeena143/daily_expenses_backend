// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users'); // Import user routes
const expenseRoutes = require('./routes/expenses'); // Import expense routes

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format

// Routes
app.use('/api/users', userRoutes); // Register users routes
app.use('/api/expenses', expenseRoutes); // Register expenses routes

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/daily_expenses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense'); // Make sure the Expense model exists

// POST /api/expenses
router.post('/', async (req, res) => {
    try {
        const { title, amount, splitMethod, participants } = req.body;

        // Validate the input
        if (!title || !amount || !splitMethod || !participants) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new expense
        const newExpense = new Expense({
            title,
            amount,
            splitMethod,
            participants
        });

        // Save the expense
        await newExpense.save();
        res.status(201).json(newExpense);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

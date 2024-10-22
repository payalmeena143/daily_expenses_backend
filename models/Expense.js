// models/Expense.js
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    splitMethod: {
        type: String,
        required: true
    },
    participants: [{
        userId: { type: String, required: true },
        amountOwed: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Expense', ExpenseSchema);

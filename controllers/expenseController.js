const Expense = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  try {
    const { description, amount, splitMethod, participants } = req.body;

    if (splitMethod === 'percentage') {
      const totalPercentage = participants.reduce((sum, p) => sum + p.percentage, 0);
      if (totalPercentage !== 100) {
        return res.status(400).json({ error: "Percentages must add up to 100%" });
      }
    }

    const expense = new Expense({ description, amount, splitMethod, participants });
    await expense.save();

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Failed to add expense" });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ "participants.user": req.params.userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve expenses" });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate("participants.user", "name email");
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve all expenses" });
  }
};

// Placeholder for balance sheet generation and download
exports.downloadBalanceSheet = async (req, res) => {
  // Logic to generate and download balance sheet
  res.send("Downloadable balance sheet");
};

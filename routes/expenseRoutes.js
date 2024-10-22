const express = require("express");
const {
  addExpense,
  getUserExpenses,
  getAllExpenses,
  downloadBalanceSheet,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/expenses", addExpense);
router.get("/expenses/user/:userId", getUserExpenses);
router.get("/expenses", getAllExpenses);
router.get("/expenses/download", downloadBalanceSheet);

module.exports = router;

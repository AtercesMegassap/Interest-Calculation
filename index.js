const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/Interest', (req, res) => {
  const { initialCapital, interestRate, months } = req.body;
  if (typeof initialCapital !== "number" && typeof interestRate !== "number" && typeof months !== "number") 
    return res.json("Please enter the values as numbers.");
  const decimalRate = interestRate / 100;
  const amount = initialCapital * Math.pow(1 + decimalRate, months);

  return res.json(`The final value of the investment of ${initialCapital}, with an interest rate of ${interestRate}% over ${months} months, is ${amount.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
# Interest Calculator API

This is a simple Node.js API built with Express that calculates the final value of an investment with compound interest. It listens for requests and calculates the final value based on the provided initial capital, interest rate, and number of months.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Interest-Calculation.git
```
Navigate to the project directory:
```bash
cd Interest-Calculation
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Interest with the following parameters in the request body, in JSON format:
```
{
  "initialCapital": 1000,
  "interestRate": 5,
  "months": 12
}
```

The API will respond with the final value of the investment based on the provided input.

Example Request:
```
GET http://localhost:3000/Interest
Request Body:
{
  "initialCapital": 1000,
  "interestRate": 5,
  "months": 12
}
```
Example Response:
```The final value of the investment of 1000, with an interest rate of 5% over 12 months, is 1795.86```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided input values should be valid numbers.

Interest Calculation
The API calculates the final value of the investment with compound interest using the formula: A = P * (1 + r/n)^(nt), where A is the final amount, P is the initial capital, r is the interest rate, n is the number of times interest is compounded per unit, and t is the number of units (months in this case).
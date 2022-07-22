// const express = require('express');

// const PORT = 3001;
// const employees = require('./db/employees');

// const app = express();

// // Implement middleware for the parsing of JSON data
// app.use(express.json());
// // Implement middleware for parsing of URL encoded data
// app.use(express.urlencoded({ extended: true }));


// // GET request for ALL employees
// app.get('/api/employees', (req, res) => {
//   // Log our request to the terminal
//   console.info(`${req.method} request received to get employees`);

//   // Sending all employees to the client
//   return res.status(200).json(employees);
// });

// // GET request for a single review
// app.get('/api/employees/:review_id', (req, res) => {
//   if (req.params.review_id) {
//     console.info(`${req.method} request received to get a single a review`);
//     const reviewId = req.params.review_id;
//     for (let i = 0; i < employees.length; i++) {
//       const currentReview = employees[i];
//       if (currentReview.review_id === reviewId) {
//         res.status(200).json(currentReview);
//         return;
//       }
//     }
//     res.status(404).send('Review not found');
//   } else {
//     res.status(400).send('Review ID not provided');
//   }
// });

// // POST request to add a review
// app.post('/api/employees', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a review`);

//   // Prepare a response object to send back to the client
//   let response;

//   // Check if there is anything in the response body
//   if (req.body && req.body.product) {
//     response = {
//       status: 'success',
//       data: req.body,
//     };
//     res.status(201).json(response);
//   } else {
//     res.status(400).json('Request body must at least contain a product name');
//   }

//   // Log the response body to the console
//   console.log(req.body);
// });

// // POST request to upvote a review
// app.post('/api/upvotes/:review_id', (req, res) => {
//   if (req.body && req.params.review_id) {
//     console.info(`${req.method} request received to upvote a review`);
//     const reviewId = req.params.review_id;
//     for (let i = 0; i < employees.length; i++) {
//       const currentReview = employees[i];
//       if (currentReview.review_id === reviewId) {
//         currentReview.upvotes += 1;
//         res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
//         return;
//       }
//     }
//     res.status(404).json('Review ID not found');
//   }
// });

// app.listen(PORT, () =>
//   console.log(`Express server listening on port ${PORT}!`)
// );

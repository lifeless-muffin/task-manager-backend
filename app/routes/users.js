const express = require('express');
const router = express.Router();

// Returns the list of users
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    status: '200',
    body: {message: 'Users!'}
  })
});

// Create a new user
router.post('/', (req, res) => {
  res.status(201).json({
    success: true,
    status: '201',
    body: {message: 'New User!'}
  })
});

// Delete a user 
router.delete('/', (req, res) => {
  res.status(200).json({
    success: true,
    status: '200',
    body: {message: 'Delete User!'}
  })
})

// Update a user 
// router.update('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     status: '200',
//     body: {message: 'Update User!'}
//   })
// })

module.exports = router
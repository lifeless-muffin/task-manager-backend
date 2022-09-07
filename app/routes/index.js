const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    status: '200',
    body: {message: 'Success!'}
  })
});

module.exports = router
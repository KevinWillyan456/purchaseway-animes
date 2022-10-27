const express = require('express');
const router = express.Router();

router.get('/in', (req, res) => {
  res.render('pages/ijiranaide-nagatoro')
})

module.exports = router;
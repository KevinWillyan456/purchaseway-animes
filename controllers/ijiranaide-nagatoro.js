const express = require('express');
const router = express.Router();

router.get('/ins', (req, res) => {
  res.render('pages/ijiranaide-nagatoro')
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/snn', (req, res) => {
  res.render('pages/shin-no-nakama')
})

module.exports = router;
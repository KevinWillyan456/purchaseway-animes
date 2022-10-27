const express = require('express');
const router = express.Router();

router.get('/dal', (req, res) => {
  res.render('pages/date-a-live')
})

module.exports = router;
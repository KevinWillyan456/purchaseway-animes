const express = require('express');
const router = express.Router();

router.get('/default', (req, res) => {
  res.render('pages/default')
})

module.exports = router;
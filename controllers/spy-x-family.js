const express = require('express');
const router = express.Router();

router.get('/sxf', (req, res) => {
  res.render('pages/spy-x-family')
})

module.exports = router;
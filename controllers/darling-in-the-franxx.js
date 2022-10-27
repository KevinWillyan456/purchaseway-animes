const express = require('express');
const router = express.Router();

router.get('/ditf', (req, res) => {
  res.render('pages/darling-in-the-franxx')
})

module.exports = router;
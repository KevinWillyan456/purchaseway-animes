const express = require('express');
const router = express.Router();

router.get('/ngnl', (req, res) => {
  res.render('pages/no-game-no-life')
})

module.exports = router;
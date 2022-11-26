const express = require('express');
const router = express.Router();

router.get('/knnw', (req, res) => {
  res.render('pages/kimi-no-na-wa')
})

module.exports = router;
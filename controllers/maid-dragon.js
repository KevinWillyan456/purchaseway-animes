const express = require('express');
const router = express.Router();

router.get('/md', (req, res) => {
  res.render('pages/maid-dragon')
})

module.exports = router;
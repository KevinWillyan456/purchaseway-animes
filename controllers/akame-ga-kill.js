const express = require('express');
const router = express.Router();

router.get('/agk', (req, res) => {
  res.render('pages/akame-ga-kill')
})

module.exports = router;
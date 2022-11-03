const express = require('express');
const router = express.Router();

router.get('/mnt', (req, res) => {
  res.render('pages/majo-no-tabitabi')
})

module.exports = router;
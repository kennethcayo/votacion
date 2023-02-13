const express = require('express');
const router = express.Router();
const Vote = require('../models/votos-model');

router.get('/votes', async (req, res) => {
  const votes = await Vote.find();
  res.send(votes);
});

module.exports = router;


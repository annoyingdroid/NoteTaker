const router = require('express').Router();

const noteRoutes = require('./notes');

router.use('/notes', noteRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
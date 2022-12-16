const router = require('express').Router();
const htmlRoutes = require('./');
const apiRoutes = require('./api');
const notesRoute = require('../public/notes');

router.use('/', htmlRoutes);
router.use('/notes', notesRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

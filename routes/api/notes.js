const router = require('express').Router();
const {createNote, deleteNote, loadNotes} = require('../../utils/noteFunctions');

router.get('/', (req, res) => {
    res.json(loadNotes());
});

router.post('/', (req, res) => {
    createNote(req.body, req.params.id);
    res.json(loadNotes());
});

router.delete('/:id', (req, res) => {
    deleteNote(req.body.id);
    res.json(loadNotes());
});

module.exports = router;
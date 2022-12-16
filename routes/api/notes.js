const router = require('express').Router();
const {createNote, deleteNote, loadNotes} = require('../../utils/noteFunctions');

router.get('/', (req, res) => {
    res.json(loadNotes());
});

router.get('/:id', (req, res) => {
    const note = loadNotes().splice(1)[req.params.id];
    if(note){
        res.json(note);
    } else {
        res.send(404);
    }
});

router.post('/', (req, res) => {
    createNote(req.body, req.params.id);
    res.json(loadNotes());
});

router.delete('/:id', (req, res) => {
    deleteNote(req.params.id);
    res.json(loadNotes());
});

module.exports = router;
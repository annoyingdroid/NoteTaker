const noteDb = require('../db/db.json');
const {writeFileSync} = require('fs');

function createNote(body, id){
    body.id = id;
    noteDb.push(body);
    writeFileSync('./db/db.json', JSON.stringify(noteDb));
    return body;
}

function deleteNote(id){

    noteDb.splice(id, 1);
    writeFileSync('./db/db.json', JSON.stringify(noteDb));
    return noteDb;
}

function loadNotes(){
    return noteDb;
}

module.exports = {createNote, deleteNote, loadNotes};
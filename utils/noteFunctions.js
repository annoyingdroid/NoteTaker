const noteDb = require('../db/db.json');
const {writeFileSync} = require('fs');

function createNote(body, id){
    body.id = noteDb.length + 1;
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
    return noteDb.slice(1);
}

module.exports = {createNote, deleteNote, loadNotes};
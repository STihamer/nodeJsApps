const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const foundedNote = notes.filter((note) => note.title === title);
  if (foundedNote.length !== 0) {
    notes.splice(notes.indexOf(foundedNote));
    saveNotes(notes);
    console.log(chalk.bgGreen("Note removed"));
  } else {
    console.log(chalk.bgRed("No note found"));
  }
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};

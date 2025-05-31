const btnE1 = document.getElementById("btn")
const appE1 = document.getElementById("App")

// Load existing notes on page load
getNotes().forEach((note) => {
    const noteE1 = createNoteE1(note.id, note.content)
    appE1.insertBefore(noteE1, btnE1)
})

function createNoteE1(id, content) {
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Notes"
    element.value = content

    // Move input event listener outside of dblclick
    element.addEventListener("input", () => {
        updateNote(id, element.value)
    })

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?")
        if (warning) {
            deleteNote(id, element)
        }
    })

    return element
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id)
    saveNote(notes)
    appE1.removeChild(element)
}

function updateNote(id, content) {
    const notes = getNotes()
    const targetIndex = notes.findIndex((note) => note.id == id)
    if (targetIndex !== -1) {
        notes[targetIndex].content = content
        saveNote(notes)
    }
}

function addNote() {
    const notes = getNotes()
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }
    const noteE1 = createNoteE1(noteObj.id, noteObj.content)
    appE1.insertBefore(noteE1, btnE1)
    notes.push(noteObj)
    saveNote(notes)
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}

btnE1.addEventListener("click", addNote)
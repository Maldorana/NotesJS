document.addEventListener("load", () => {

  // Hooks
    const listHook = document.getElementById('notes');
    const createHook = document.getElementById('add-note');

  // Create Note
    createHook.addEventListener('click', (event) => {
      event.preventDefault(); 

      NoteBook.create(document.getElementById('note-title').value, document.getElementById('note-content').value, NoteBook.dateFormat())
      // NoteBook.listAll();
      clearText('note-title');
      clearText('note-content');
    });

});

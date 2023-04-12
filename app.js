console.clear();

("use strict");

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  addNote();
});

let saveNote = () => {
  let notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((item) => {
    data.push(item.value);
  });
  localStorage.setItem("note", JSON.stringify(data));
};

let addNote = (text = " ") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
          <div class="toolbar">
            <div class="heading">
              <h2>Note App</h2>
            </div>
            <div class="icons">
              <i class="fa-solid save fa-floppy-disk"></i>
              <i class="fa-solid trash fa-trash"></i>
            </div>
          </div>
          <textarea>${text}</textarea> `;
  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNote()
  });
  note.querySelector(".save").addEventListener("click", () => {
    saveNote();
  });

  let main = document.querySelector(".main");
  main.append(note);
  saveNote()
};

window.onload = () => {
  let lsnotes = JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach((item) => {
    addNote(item);
  });
  lsnotes.length == 0
    ? localStorage.removeItem("notes")
    : localStorage.setItem(JSON.stringify(data));
  addNote();
};

const noteAudio = {};
const notes = ["a", "b", "c", "d", "e", "f", "g"];
var currentNote = pickRandomNote()
var score = 0
const scoreText = document.getElementById("score")

function fillNotes() {
  notes.forEach((note) => {
    noteAudio[note] = new Audio(`audio/${note}.wav`);
  });
}

function pickRandomNote() {
  const randomNote = notes[Math.floor(Math.random() * 7)];
  return randomNote
}

function playAudio() {
  if (noteAudio[currentNote]) {
    noteAudio[currentNote].play();
  } else {
    console.log("The note does not exist");
    console.log(currentNote)
  }
}

function submit(notepressed){
  if (currentNote === notepressed){
    score++
    scoreText.innerText = `Score: ${score}`
  }
}

function next() {
  currentNote = pickRandomNote();
}

fillNotes();

var mistakes=0
function keyboard() {
  let buttonhtml = "qwertyuiopasdfghjklzxcvbnm".split("").map(letter=>
    `<button class="btn btn-lg btn-info m-2" id='` + letter + `' onClick="guessed('` + letter + `')">` + letter + `</button>`).join("");
  document.getElementById("keyboard").innerHTML=buttonhtml
}

keyboard()

 let emotions = ["joy", "sadness", "fear", "disgust", "anger", "anxiety", "nostalgia", "envy", "ennui", "embarrassment"]
var answer =""
var guess =[]
var wordprogress =null 

function randomword() {
  answer=emotions[Math.floor(Math.random()*emotions.length)]
}


function guessed(letter) {
 guess.indexOf(letter) === -1? ( guess.push(letter),mistakes++):null
  document.getElementById(letter).setAttribute("disabled", true)
  if (answer.indexOf(letter)>=0){
    guessedword()
    end()
  }
}


function end() {
  if (answer===wordprogress){
  document.getElementById("keyboard").innerHTML="You guessed correct! Press try again to replay"
  }
  if (mistakes>=3) {
     document.getElementById("keyboard").innerHTML="You made too many mistakes. Press try again to replay"
  }
}


function guessedword() {
  wordprogress=answer.split("").map(letter=>
    (guess.indexOf(letter)>=0?letter:"_")).join("")
  document.getElementById("correct_emotion").innerHTML=wordprogress
}

randomword() 
guessedword()
function tryagain() {
   document.getElementById("correct_emotion").innerHTML=""
  randomword()
  guess= []
  keyboard()
  guessedword()
}
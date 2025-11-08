//data types//

//1. string ""
//2. int - integer (whole numbers)
//3. float - decimals (1.0, 1.2)
//4. variables 

//console.log 

//list
//declare that you are creating a list 
//give the list a name
//the items in the list 

function start() {
  document.getElementById("question_page").style.display = "none";
  document.getElementById("ending_page").style.display = "none";
}

const questions = [
  [
    ["How would you describe yourself?"],
    ["Introverted", "Perfectionist", "Unorganised", "Extroverted", "Kind"]
  ],
  [
    ["What's your favourite hobby?"],
    ["Reading", "Planning", "Eating", "Building Things", "Playing with animals"]
  ],
  [
    ["If you were were a superhero, what power would you want?"],
    ["Telekinesis", "Nothing", "Shapeshifting", "Have superhuman abilities", "Flying"]
  ],
  [
    ["If you could be an animal, what would you be?"],
    ["Crow", "Dog", "Donkey", "Lion", "Cat"]
  ],
  [
    ["Which food do you like the most out of these?"],
    ["Fried Chicken", "Sandwich", "Tofu", "Burger", "Pancakes"]
  ]
]

var questionNumber = 0;
var ravenScore = 0;
var robinScore = 0;
var beastboyScore = 0;
var cyborgScore = 0;
var starfireScore = 0;

function setQuestion() {
  //change the text displayed by showing the correct question and answer pairs
  document.getElementById("question").innerHTML = questions[questionNumber][0];
  document.getElementById("button1").innerHTML = questions[questionNumber][1][0];
  document.getElementById("button2").innerHTML = questions[questionNumber][1][1];
  document.getElementById("button3").innerHTML = questions[questionNumber][1][2];
  document.getElementById("button4").innerHTML = questions[questionNumber][1][3];
  document.getElementById("button5").innerHTML = questions[questionNumber][1][4];

  //display the required elements on the questions and options page 
  document.getElementById("question_page").style.display = "block";
  document.getElementById("ending_page").style.display = "none";
  document.getElementById("starting_page").style.display = "none";
}

function startgame() {
  document.getElementById("question_page").style.display = "block";
  document.getElementById("starting_page").style.display = "none";
}


function answer(button) {
  console.log(this)
  if (questionNumber === 4) {
    endinggame()
  }

  if (button.id === "button1") {
    ravenScore += 1;
    questionNumber += 1;
    setQuestion()
  } else if (button.id === "button2") {
    robinScore += 1;
    questionNumber += 1;
    setQuestion()
  }
  else if (button.id === "button3") {
    beastboyScore += 1;
    questionNumber += 1;
    setQuestion()
  }
  else if (button.id === "button4") {
    cyborgScore += 1;
    questionNumber += 1;
    setQuestion()
  }
  else if (button.id === "button5") {
    starfireScore += 1;
    questionNumber += 1;
    setQuestion()
  }
}


function endinggame() {

  console.log(ravenScore);
  document.getElementById("question_page").style.display = "none";
  document.getElementById("ending_page").style.display = "block";

  var highest = Math.max(ravenScore, robinScore, beastboyScore, cyborgScore, starfireScore)
  if (ravenScore === highest) {
    document.getElementById("ending_text").innerText = "You resemble Raven!"
    document.getElementById("ending_desc").innerText = "Raven is mainly introverted but when someone messes with her, she can and will give them what they deserve."
    document.getElementById("ending_pic").src = "raven.webp"
  }
  else if (robinScore === highest) {
    document.getElementById("ending_text").innerText = "You resemble Robin!"
    document.getElementById("ending_desc").innerText = "Robin is a natural born leader, everything must be to absolute perfection and be planned to the most precise detail."
    document.getElementById("ending_pic").src = "robin.webp"
  }
  else if (beastboyScore === highest) {
    document.getElementById("ending_text").innerText = "You resemble Beast Boy!"
    document.getElementById("ending_desc").innerText = "Beast Boy is very casual and more 'go with the flow'. he likes animals and pranks and absolutely LOVES tofu."
    document.getElementById("ending_pic").src = "beastboy.webp"
  }
  else if (cyborgScore === highest) {
    document.getElementById("ending_text").innerText = "You resemble Cyborg!"
    document.getElementById("ending_desc").innerText = "Cyborg is a friendly and optimistic person. He loves burgers and loves building things. He hates water though"
    document.getElementById("ending_pic").src = "cyborg.webp"
  }
  else if (starfireScore === highest) {
    document.getElementById("ending_text").innerText = "You resemble Starfire!"
    document.getElementById("ending_desc").innerText = "Starfire is a kind and naive person. She loves animals, especially cats and always gives everyone a second chance. Even her evil twin who tried to take over Earth."
    document.getElementById("ending_pic").src = "starfire.webp"
  }


}

let buton = document.getElementById("buton");
let points = 0;


function something() {
  let container = document.getElementById("container");
  let question1 = document.getElementById("question1");
  if (container.style = "display: flex;") {
    container.style = "display: none;";
    question1.style = "display: flex;";
  }
}
function question01() {
  let question1 = document.getElementById("question1");
  let question2 = document.getElementById("question2");
  let player = document.getElementById("answer1").value;
  console.log(points);
  console.log(player);
  console.log(typeof (player));
  if (player === "2006-04-20") {
    points += 1;
    question1.style = "display: none;";
    question2.style = "display: flex;";
  }
  else if (player != "2006-04-20") {
    question1.style = "display: none;";
    question2.style = "display: flex;";
  }
  if (player === "") {
    alert("Invalid answer")
    question1.style = "display: flex;";
    question2.style = "display: none;";
  }
  console.log(points);
}
function question02() {
  let question2 = document.getElementById("question2");
  let question3 = document.getElementById("question3");
  let player = document.getElementById("answer2").value;
  console.log(points);
  console.log(player);
  console.log(typeof (player));
  if (player === "") {
    alert("Invalid answer")
  }
  else if (player === "king explosion murder" || player === "king explosion murderer") {
    points += 1;
    question2.style = "display: none;";
    question3.style = "display: flex;";
  }
  else {
    question2.style = "display: none;";
    question3.style = "display: flex;";
  }
  console.log(points);
}
function question03() {
  let question3 = document.getElementById("question3");
  let question4 = document.getElementById("question4");
  let player = document.getElementById("answer3").value;
  console.log(points);
  console.log(player);
  console.log(typeof (player));
  if (player === "") {
    alert("Invalid answer")
  }
  else if (player === "spicy" || player === "spicy food") {
    points += 1;
    question3.style = "display: none;";
    question4.style = "display: flex;";
  }
  else {
    question3.style = "display: none;";
    question4.style = "display: flex;";
  }
  console.log(points);
}
function question04() {
  let question4 = document.getElementById("question4");
  let question5 = document.getElementById("question5");
  let player = document.getElementById("answer4").value;
  console.log(points);
  console.log(player);
  console.log(typeof (player));
  if (player === "") {
    alert("Invalid answer")
  }
  else if (player === "nitroglycerin") {
    points += 1;
    question4.style = "display: none;";
    question5.style = "display: flex;";
  }
  else {
    question4.style = "display: none;";
    question5.style = "display: flex;";
  }
  console.log(points);
}
function question05() {
  let question5 = document.getElementById("question5");
  let results = document.getElementById("results");
  let player = document.getElementById("answer5").value;
  console.log(points);
  console.log(player);
  console.log(typeof (player));
  if (player === "") {
    alert("Invalid answer")
  }
  else if (player === "kacchan") {
    points += 1;
    question5.style = "display: none;";
    results.style = "display: flex;";
    what.innerHTML = `You got ${points} out of 5!`
  }
  else {
    question5.style = "display: none;";
    results.style = "display: flex;";
    what.innerHTML = `You got ${points} out of 5!`
  }
  console.log(points);
}
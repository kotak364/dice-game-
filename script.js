const b = document.querySelector(".btn");
const h = document.querySelector("h1");
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");

//button event
b.addEventListener("click",  () => {
  const randomnumber = Math.floor(Math.random() * 6 + 1);
  const a = "dice" + randomnumber + ".png";

  const randomnumber2 = Math.floor(Math.random() * 6 + 1);

  const c = "dice" + randomnumber2 + ".png";

  p1.setAttribute("src", a);

  p2.setAttribute("src", c);

  if (randomnumber > randomnumber2) {
    h.textContent = "Player 1 Won";
    h.style.color = "black";
  } else if (randomnumber < randomnumber2) {
    h.textContent = "Player 2 Won";
    h.style.color = "blue";
  } else {
    h.textContent = "Draw";
    h.style.color = "red";
  }
});

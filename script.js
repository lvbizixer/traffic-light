const greenLight = document.getElementById("green");
const yellowLight = document.getElementById("yellow");
const redLight = document.getElementById("red");

const turnOnGreen = document.getElementById("turn__on__green");
const turnOnYellow = document.getElementById("turn__on__yellow");
const turnOnRed = document.getElementById("turn__on__red");

turnOnGreen.addEventListener("click", () => {
  if (greenLight.style.backgroundColor === "rgb(1, 241, 1)") {
    greenLight.style.backgroundColor = "green";
  } else {
    greenLight.style.backgroundColor = "rgb(1, 241, 1)";
  }
});

turnOnYellow.addEventListener("click", () => {
  if (yellowLight.style.backgroundColor === "yellow") {
    yellowLight.style.backgroundColor = "rgb(102, 102, 9)";
  } else {
    yellowLight.style.backgroundColor = "yellow";
  }
});

turnOnRed.addEventListener("click", () => {
    if (redLight.style.backgroundColor === "red"){
        redLight.style.backgroundColor = "rgb(102, 17, 17)"
    } else{
        redLight.style.backgroundColor = "red";
    }
});

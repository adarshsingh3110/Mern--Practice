let dice = document.querySelector(".dice");
let rollBtn = document.querySelector(".roll");

function rollDice() {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    dice.textContent = randomNumber;
}

rollBtn.addEventListener("click", rollDice);
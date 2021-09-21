var luckyNumber = parseInt(Math.random() * 11);

function Guess() {
  var resultElment = document.getElementById("resultado");
  var guess = parseInt(document.getElementById("valor").value);

  if (guess == luckyNumber) {
    resultElment.innerHTML = "Boaaaaa";
  } else if (guess > luckyNumber || guess < 0) {
    resultElment.innerHTML = "Deve ser um número de 0 a 10";
  } else {
    resultElment.innerHTML = "errooooooooou, o número era " + luckyNumber;
  }
}

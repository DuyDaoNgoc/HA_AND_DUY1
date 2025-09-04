function calculate() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const opertor = document.getElementById("operator").value;
  let resuft = [];

  if (isNaN(a) || isNaN(b)) {
    resuft = "Please enter a number";
    switch (opertor) {
      case "plus":
        resuft = a + b;
        break;
      case "minus":
        resuft = a - b;
        break;
      case "multiply":
        resuft = a * b;
        break;
      case "divide":
        resuft = a / b;
        break;
      case "%":
        resuft = a % b;
        break;
      default:
        resuft = "Please enter a valid operator";
    }
  }
  document.querySelector("div p").innerText = "kết quả: " + result;
  document.querySelector("div p").style.color = "red";
}

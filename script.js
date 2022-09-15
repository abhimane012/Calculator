var buttons = document.querySelectorAll(".btn");
var display = document.querySelector("#ans-box");

// display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    display.style.fontSize = "70px";
    var value = this.getAttribute("val");
    var text = display.value.trim();

    if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(text);
      display.value = "";
    } else if (value == "AC") {
      display.value = "";
    } else if (value == "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.value = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes(".")) {
        display.value = text + ".";
      }
    } else if (value == "%") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      display.value = operand1;
    } else if (value == "=") {
      operand2 = parseFloat(text);
      var result = eval(operand1 + " " + operator + " " + operand2);

      if (result == Infinity) {
        display.style.fontSize = "25px";
        display.value = "Error! Can't Divide by Zero";
      } else if (result) {
        display.value = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      display.value += value;
    }
  });
}

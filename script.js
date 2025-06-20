window.onload = function () {
  let display = document.getElementById('display');

  function appendValue(value) {
    if (display.innerText === "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function clearDisplay() {
    display.innerText = "0";
  }

  function calculate() {
    try {
      display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
      display.innerText = "Error";
    }
  }

  window.appendValue = appendValue;
  window.clearDisplay = clearDisplay;
  window.calculate = calculate;
};

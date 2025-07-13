const display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch {
    display.innerText = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

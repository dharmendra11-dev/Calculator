const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

function updateDisplay() {
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch {
    display.value = 'Error';
    expression = '';
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;

    switch (key) {
      case 'C':
        expression = '';
        break;
      case '=':
        calculate();
        return;
      case 'Backspace':
        expression = expression.slice(0, -1);
        break;
      default:
        expression += key;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((/[0-9+\-*/.]/).test(key)) {
    expression += key;
  } else if (key === 'Enter') {
    calculate();
    return;
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    expression = '';
  }

  updateDisplay();
});

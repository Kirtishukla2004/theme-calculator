const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".cal-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    handleButtonClick(buttonValue);
  });
});

function handleButtonClick(value) {
  switch (value) {
    case "=":
      try {
        const expression = display.innerText;
        const result = eval(expression.replace(/x/, "*"));
        display.innerText = result;
      } catch (error) {
        display.innerText = "Error";
      }
      break;
    case "C":
      display.innerText = "";
      break;
    default:
      display.innerText += value;
      break;
  }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggle-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  const buttonValue = equalButton.textContent;
  handleButtonClick(buttonValue);
});

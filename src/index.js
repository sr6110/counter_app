let count = 0;
const countBtn = document.getElementById("count");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");

const buttons = document.querySelectorAll("button");
const inputNumber = document.getElementById("inputNumber");
let incBy = inputNumber.value;

inputNumber.addEventListener("input", function (event) {
  incBy = event.target.value;
  decrease.innerText = "-" + (incBy.length === 0 ? 1 : incBy);
  increase.innerText = "+" + (incBy.length === 0 ? 1 : incBy);
});

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    count = counter(element, incBy, count);
    countBtn.innerText = count;
  });
});

decrease.innerText = "-" + incBy;
increase.innerText = "+" + incBy;

function counter(element, incBy, count) {
  if (element.id === "increase") {
    count += Number.parseInt(incBy);
  } else if (element.id === "decrease") {
    count -= Number.parseInt(incBy);
  } else if (element.id === "reset") {
    count = 0;
  }
  return count;
}

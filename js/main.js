// Active Button and percentage
let buttonSelected = document.getElementsByClassName("button_percentage");
let buttonQuantity = buttonSelected.length;
let buttonNumber = "";
let percentage = "";
let custom = document.getElementById("custom");
let bill = document.getElementById("bill");
let quantity = document.getElementById("quantity");
let amount = document.getElementById("amount");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
let amountPerPerson = "";
let totalPerPerson = "";

// Final calc

const finalCalc = () => {
  totalPerPerson = bill.value / quantity.value;
  totalPerPerson = totalPerPerson.toFixed(2);
  amount.setAttribute("amountNumber", "");

  if (totalPerPerson > 0 && totalPerPerson != Infinity) {
    total.setAttribute("totalNumber", totalPerPerson);
  } else {
    total.setAttribute("totalNumber", "");
  }
  if (custom.value > 0) {
    amountPerPerson = totalPerPerson * (custom.value / 100);
    amountPerPerson = amountPerPerson.toFixed(2);
    if (
      amountPerPerson != NaN &&
      amountPerPerson != Infinity &&
      amountPerPerson > 0
    ) {
      amount.setAttribute("amountNumber", amountPerPerson);
    } else {
      amount.setAttribute("amountNumber", "");
    }
  } else if (percentage !== 0) {
    amountPerPerson = totalPerPerson * (percentage / 100);
    amountPerPerson = amountPerPerson.toFixed(2);

    if (
      amountPerPerson != NaN &&
      amountPerPerson != Infinity &&
      amountPerPerson > 0
    ) {
      amount.setAttribute("amountNumber", amountPerPerson);
    } else {
      amount.setAttribute("amountNumber", "");
    }
  }
};

// Detecting if there is something in the custom input
custom.addEventListener("keyup", () => {
  if (custom.value > 0) {
    console.log(custom.value);
    custom.classList.add("inputActive");

    for (let i = 0; i < buttonQuantity; i++) {
      buttonSelected[i].classList.remove("buttonActive");
    }
  } else {
    custom.classList.remove("inputActive");
  }
});

for (let i = 0; i < buttonQuantity; i++) {
  buttonSelected[i].addEventListener("click", () => {
    buttonSelected[i].classList.add("buttonActive");
    buttonNumber = i;

    if (buttonNumber === 0) {
      percentage = 5;
    } else if (buttonNumber == 1) {
      percentage = 10;
    } else if (buttonNumber == 2) {
      percentage = 15;
    } else if (buttonNumber == 3) {
      percentage = 20;
    } else if (buttonNumber == 4) {
      percentage = 25;
    }

    for (x = 0; x < buttonQuantity; x++) {
      if (x != i) {
        buttonSelected[x].classList.remove("buttonActive");
        custom.value = "";
        custom.classList.remove("inputActive");
      }
    }
    finalCalc();
  });
}

quantity.addEventListener("keyup", finalCalc);
bill.addEventListener("keyup", finalCalc);
custom.addEventListener("keyup", finalCalc);

reset.addEventListener("click", () => {
  custom.classList.remove("inputActive");
  for (let i = 0; i < buttonQuantity; i++) {
    buttonSelected[i].classList.remove("buttonActive");
  }

  amount.value = 0;
  bill.value = 0;
  percentage = 0;

  amount.setAttribute("amountNumber", "");
  total.setAttribute("totalNumber", "");
});

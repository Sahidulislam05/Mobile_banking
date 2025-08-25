const validPin = 1234;

// function to get input values

function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

// function to get innerText

function getInnerText(id) {
  const elementValuNumber = parseInt(document.getElementById(id).innerText);
  return elementValuNumber;
}

// function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// Add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pinNumber = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const totalAvailableBalance = amount + availableBalance;
    setInnerText(totalAvailableBalance);
  });

// cash out money

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = getInputValueNumber("withdraw-amount");
  const availableBalance = getInnerText("available-balance");
  const totalNewAvailableBalance = availableBalance - amount;
  setInnerText(totalNewAvailableBalance);
});

// Toggle Section Display

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cash-out-parent").style.display = "none";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });

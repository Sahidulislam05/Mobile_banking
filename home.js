const validPin = 1234;
// Add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const totalAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

// cash out money
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const totalAvailableBalance = availableBalance - amount;
  document.getElementById("available-balance").innerText =
    totalAvailableBalance;
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

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin");
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

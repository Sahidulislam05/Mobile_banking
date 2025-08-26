const validPin = 1234;
const transactionsData = [];

// function to get input values

function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

// function to get innerText

function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}

// function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to Toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to Toggle button

function handleButtonToggle(id) {
  const formButtons = document.getElementsByClassName("form-btn");
  for (const btn of formButtons) {
    btn.classList.remove("border-[#0874f2d]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

    const data = {
      name: "Add money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// cash out money

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = getInputValueNumber("withdraw-amount");
  const availableBalance = getInnerText("available-balance");
  const totalNewAvailableBalance = availableBalance - amount;
  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
});

//Transaction

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionsData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center">
              <div class="border-2 rounded-full p-3 bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
      `;
      transactionContainer.appendChild(div);
    }
  });

// Toggle Section Display

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";

    handleButtonToggle("cash-out-button");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("transfer-money-parent").style.display = "block";
    handleButtonToggle("transfer-button");
  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
    handleButtonToggle("get-bonus-button");
  });

document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("bill-button");
});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-button");
  });

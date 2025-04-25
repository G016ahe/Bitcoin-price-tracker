// script.js
document.addEventListener("DOMContentLoaded", function () {
  const priceElement = document.getElementById("price");

  fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json")
    .then(response => response.json())
    .then(data => {
      const price = data.bpi.USD.rate;
      priceElement.innerText = `$${price}`;
    })
    .catch(error => {
      priceElement.innerText = "Error loading price";
      console.error("Fetch error:", error);
    });
});


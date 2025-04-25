const priceElement = document.getElementById("price");

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    const price = data.bitcoin.usd;
    priceElement.textContent = "$" + price;
  })
  .catch(error => {
    priceElement.textContent = "Error loading price";
    console.error(error);
  });

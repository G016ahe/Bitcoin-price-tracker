const priceElement = document.getElementById("price");

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    const price = data.bitcoin.usd;
    priceElement.innerText = `$${price}`;
  })
  .catch(error => {
    priceElement.innerText = "Error loading price";
    console.error("Fetch error:", error);
  });


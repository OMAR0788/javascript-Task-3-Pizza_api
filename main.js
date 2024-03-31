async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const productsData = await response.json();
  console.log(productsData);
  const products = productsData.products;
  const result = products
    .map((product) => {
      return `
            <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" />
            <p class="price"><span>${product.price}</span>$</p>
            </div>
            `;
    })
    .join("");
  document.querySelector(".menu").innerHTML = result;
}

getProducts();

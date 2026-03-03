"use strict";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productArray) {
  productArray.forEach((product) => {
    productContainer.innerHTML += `
    <div class="product_card">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <h3>${product.productdisplayname}</h3>
          <h4>${product.articletype}</h4>
          <p class="price">DKK ${product.price},-</p>
          <span class="sold_out_badge">NEW IN</span>
          <a href="product.html?id=${product.id}" class="read_more_button">Læs mere</a>
        </div>
    `;
  });
}

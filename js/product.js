const params = new URLSearchParams(window.location.search);
console.log("params", params);
const id = params.get("id");
console.log("id", id);
// const id = 1552;
const productContainer = document.querySelector(".product_wrapper");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    productContainer.innerHTML = ` <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
        
        </div>

        <!-- Produktinfo -->
        <div class="product_info">
          <h2>${data.productdisplayname}</h2>

          <!-- Pris -->

          <p class="description">${data.description}</p>
          <p class="details">
            <strong>Brand:</strong> ${data.brandname}<br />
            <strong>Kategori:</strong> ${data.category}<br />
            <strong>Farve:</strong> ${data.colour}<br />
            <strong>Materiale:</strong> ${data.material}
          </p>
          <p class="price"><span class="old_price">DKK 199,-</span> DKK 129,-</p>
          <a href="productlist.html" class="back_button">Tilbage til produkter</a>
        </div>
      </div>
      `;
  });

// console.log("productContainer");

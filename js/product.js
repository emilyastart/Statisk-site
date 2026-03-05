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
    productContainer.innerHTML = `
  <div class="product_image">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" 
         alt="${data.productdisplayname}" />
  </div>

  <div class="product_info">
    <h2>${data.productdisplayname}</h2>

    ${data.soldout ? '<span class="sold_out_badge">SOLD OUT</span>' : '<span class="new_badge">NEW IN</span>'}

    <p class="description">${data.description || "Ingen beskrivelse tilgængelig."}</p>

    <p class="details">
      <strong>Brand:</strong> ${data.brandname}<br />
      <strong>Kategori:</strong> ${data.category}<br />
      <strong>Farve:</strong> ${data.colour}<br />
      <strong>Materiale:</strong> ${data.material || "Ukendt"}
    </p>

    <p class="price">
      ${data.discount ? `<span class="old_price">DKK ${data.price},-</span> DKK ${Math.round(data.price * (1 - data.discount / 100))},-` : `DKK ${data.price},-`}
    </p>

    <a href="index.html" class="back_button">Tilbage til kategorier</a>
  </div>
`;
  });

// console.log("productContainer");

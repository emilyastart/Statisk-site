console.log("Hello World!");
const category_list_container = document.querySelector(".category_list_container");
console.log("category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      category_list_container.innerHTML += `<a class="category_card" href="productlist.html?category=${category.category}">${category.category}</a>`;
    });
  });

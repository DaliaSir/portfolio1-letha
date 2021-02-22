const detailContainer = document.querySelector(".details_results");
const productImage = document.querySelector(".details_product-Img");
const productDetails = document.querySelector(".details_product-text");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = parseInt(params.get("id"));
console.log(id);

const product = shoesData.find((product) => {
  if (product.id === id) {
    return true;
  }
});

console.log(product);

productImage.innerHTML = `
<img src="${product.imageUrl}" alt="${product.name}">
`;

productDetails.innerHTML = `
<h1>${product.name}</h1>
<p class="product-price">${product.price} NOK</p>
<p>${product.description}</p>
`;

document.title = `LETHA - ${product.name}`;

const bootsResultsContainer = document.querySelector(".boots_results");

function filterProducts(){
  bootsResultsContainer.innerHTML ="";
  for (let i = 0; i < shoesData.length; i++) {

    if (
      !shoesData[i].category.startsWith("b") &&
      !shoesData[i].category.startsWith("B")
    ) {
      continue;
    }

    bootsResultsContainer.innerHTML += `
        <a href= "details.html?id=${shoesData[i].id}" class="card">
        <img src="${shoesData[i].imageUrl}" alt="${shoesData[i].name}">
        <h4>${shoesData[i].name}</h4>
        <p>${shoesData[i].price} NOK</p>
        </a>
    `;
}}

filterProducts(shoesData);


function sortProducts(){
  document.querySelector(".sortBy").addEventListener("change", function (event) {
    console.log(event.target.value);

    if (event.target.value.includes("name")) {
      shoesData.sort(
      function (a, b) {
        if (a.name > b.name) {
          return 1;
        }else if (a.name < b.name) {
          return -1;
        }else{
          return 0;
        }
      }
    );
    }

    if (event.target.value.includes("price")) {
      shoesData.sort(
      function (a,b) {
        if (a.price > b.price) {
          return 1;
        }else if (a.price < b.price) {
          return -1;
        }else{
          return 0;
        }
      }
    );
    }

    if (event.target.value.includes("descending")) {
      shoesData.reverse();
    }  
    filterProducts(shoesData);
   } ); }

sortProducts();

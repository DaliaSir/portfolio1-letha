const salesResultsContainer = document.querySelector(".special-prices_results");

for (let i = 0; i < shoesData.length; i++) {
  if (!shoesData[i].sales === true) {
    continue;
  }
  salesResultsContainer.innerHTML += `
        <a href= "details.html?id=${shoesData[i].id}" class="card">
        <img src="${shoesData[i].imageUrl}" alt="${shoesData[i].name}">
        <h4>${shoesData[i].name}</h4>
        <p style="text-decoration: line-through;">${shoesData[i].price} NOK</p>
        <p>${shoesData[i].salesPrice} NOK</p>
        </a>
  
    `;
}

const dressResultsContainer = document.querySelector(".dress-shoes_results");

for (let i = 0; i < shoesData.length; i++) {
  if (
    !shoesData[i].category.startsWith("d") &&
    !shoesData[i].category.startsWith("D")
  ) {
    continue;
  }
  dressResultsContainer.innerHTML += `
        <a href= "details.html?id=${shoesData[i].id}" class="card">
        <img src="${shoesData[i].imageUrl}" alt="${shoesData[i].name}">
        <h4>${shoesData[i].name}</h4>
        <p>${shoesData[i].price} NOK</p>
        </a>
    `;
}

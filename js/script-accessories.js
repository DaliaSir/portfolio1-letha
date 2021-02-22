const accessoriesResultsContainer = document.querySelector(
  ".accessories_results"
);

for (let i = 0; i < shoesData.length; i++) {
  if (
    !shoesData[i].category.startsWith("a") &&
    !shoesData[i].category.startsWith("A")
  ) {
    continue;
  }
  accessoriesResultsContainer.innerHTML += `
            <a href= "details.html?id=${shoesData[i].id}" class="card">
            <img src="${shoesData[i].imageUrl}" alt="${shoesData[i].name}">
            <h4>${shoesData[i].name}</h4>
            <p>${shoesData[i].price} NOK</p>
            </a>
          `;
}

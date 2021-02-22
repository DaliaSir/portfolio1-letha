const popularResultsContainer = document.querySelector(".popular_results");

for (let i = 0; i < shoesData.length; i++) {
  if (!shoesData[i].popular === true) {
    continue;
  }
  popularResultsContainer.innerHTML += `
          <a href= "details.html?id=${shoesData[i].id}" class="card">
          <img src="${shoesData[i].imageUrl}" alt="${shoesData[i].name}">
          <h4>${shoesData[i].name}</h4>
          <p>${shoesData[i].price} NOK</p>
          </a>
    `;
}

hamBtn.addEventListener("click", navShowClose);

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", navShowClose);
  }
)

const productsContainer = document.getElementById("products-container");

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
    console.log(products);
  } catch (error) {
    console.error("error fetching products", error);
  }
};

fetchProducts();

const displayProducts = (products) => {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("card");
    productElement.style.width = "15rem";
    productElement.innerHTML = `
        <img class="card-img-top" src="${product.image}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
           ${product.price} $
          </p>
          <a href="#" class="btn btn-primary details">go to details</a>
    `;
    const detailsBtn = productElement.querySelector(".details");
    detailsBtn.addEventListener("click", () => {
      window.location.href = `productDetails.html?id=${product.id}`;
    });
    productsContainer.appendChild(productElement);
  });
};

const productContainer = document.getElementById("product-detail-container");

const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const product = await response.json();
    displayProductDetails(product);
    console.log(product);
  } catch (error) {
    console.error("error fetching product details", error);
  }
};

//get product id from url

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const displayProductDetails = (product) => {
  productContainer.innerHTML = `<img class="card-img-top image" src="${product.image}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
           ${product.price} $
          </p>
          <p class="card-text">
           ${product.description}
          </p>
          <p class="card-text">
           ${product.category} $
          </p>
          `;
  productContainer.style.width = "15rem";
};

fetchProductDetails(productId);

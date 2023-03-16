const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", () => {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado

  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", () => {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado

  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  const isProductDetailClose =
    productDetailContainer.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado
  if (!isProductDetailClose) {
    productDetailContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
});

menuCarIcon.addEventListener("click", () => {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado
  const isDesktopMenu = desktopMenu.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado

  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }

  const isProductDetailClose =
    productDetailContainer.classList.contains("inactive"); //preguntando si tiene la clase entonces esta cerrado
  if (!isProductDetailClose) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
});

productDetailCloseIcon.addEventListener("click", () => {
  productDetailContainer.classList.add("inactive");
});

//peticion a la api
const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers:{
      "Content-Type": "aplication/json;charset=utf-8",
  },
  // params: {
  //     "language": navigator.language || "es-ES"
  // },
})

//All products
//con axios no hay que poner data= res.json(), solo destructurando
const getAllProducts = async()=>{
const {data} = await api('products')
data.forEach((product) => {
  const productCardCategory = document.createElement("div");
  productCardCategory.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", () => {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
  });

  const productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement("div");

      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.price;
      const productName = document.createElement("p");
      productName.innerText = product.title;
      
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
  
      const productInfoFigure = document.createElement("figure");
      const productImgCard = document.createElement("img");
      productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
      productInfoFigure.appendChild(productImgCard);
  
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
  
      productCardCategory.appendChild(productImg);
      productCardCategory.appendChild(productInfo);
  
      cardsContainer.appendChild(productCardCategory);

});

}
getAllProducts()


//Categories
const getCategoriesProducts = async()=>{

const {data} = await api('products/categories')
data.forEach((category) => {
    
  const previewCategoryContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

  const categoryContainer = document.createElement('div')
  categoryContainer.classList.add('category-container')

  const categoryTitle = document.createElement('h3')
  categoryTitle.classList.add('category-title')
  categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);

  const categoryImage = document.createElement('img');
  categoryImage.classList.add('category-image');
  categoryImage.setAttribute('src', categoryImages[category]);

  categoryContainer.appendChild(categoryImage); 
  categoryContainer.appendChild(categoryTitle)
  previewCategoryContainer.appendChild(categoryContainer)
});

}
getCategoriesProducts()



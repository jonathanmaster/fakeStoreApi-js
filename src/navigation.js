
const navigator = ()=>{
    console.log({location})
    
    if (location.hash.startsWith('#allproducts')) {
        allPage()
    }else if (location.hash.startsWith('#details=')) {
        detailsPage()
    }else if (location.hash.startsWith('#category=')) {
        categoriesPage()
    }else{
        homePage()
    }
    
    location.hash
}

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener('hashchange', navigator,false)

const homePage = ()=>{
    getCategoriesProducts()
    getAllProductsHome()
    console.log('home')
}

const allPage = ()=>{
    getAllProducts()
    console.log('Estamos en allproducts')
}

const detailsPage = ()=>{
    console.log('detalles producto')
}

const categoriesPage = ()=>{
    console.log('categories')
}








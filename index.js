const body = document.querySelector('body');
const listProductsHTML = document.querySelector('.list__products');
let products = [];


const addDataToHTML = () => {
    it (products.length > 0) {
        products.forEach((product) => {
            let newPorduct = document.createElement('div');
            newPorduct.dataset.id = product.id;
            newPorduct.classList.add('item');
            newPorduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
            <button class="addToCart">Add To Cart</button>
            `;
            listProductsHTML.appendChild(newPorduct);
        });
    }
};  

const initApp = () => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
        products = json;
        console.log('products');
    });
};
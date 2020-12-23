let cart = [];
let cartKey = "itemNumbers";



async function getItemData() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log(id);
    const response = await fetch('http://localhost:3000/api/teddies/' + id);
    const data = await response.json();
    console.log(data);
    const product = document.createElement('div')
    product.innerHTML += ` 
        <div class="card my-3 shadow p-3 mb-5 rounded">
            <div class="embed-responsive embed-responsive-16by9">
                <a href="item.html?id=${data._id}"><img class="card-img-top embed-responsive-item" src="${data.imageUrl}" alt=""></a>
            </div>
            <div class="card-body">
                <div class="card-text d-flex justify-content-around align-items-center text-capitalize">
                    <h5 class="fw-bolder">${data.name}</h5>
                    <span class=""><i class="fas fa-dollar-sign"></i> ${data.price}</span>
                </div>
                <div class="d-flex justify-content-center align-items-center my-3">
                  <select class="form-select form-select-sm form-select-lg px-4 py-2" aria-label=".form-select-sm products-quantity w" > 
                  <option >Chose the color</option>
                  ${data.colors.map(addColor)}   
                  </select>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                   <button id="add-cart" onclick="addToCart('${data._id}')" class="btn btn-dark px-4">Add to Cart</button>
                </div>
            </div>   
        </div>
    `;


    document.getElementById('product-items').appendChild(product);
}

getItemData();

function addColor(color) {
    return `<option >${color}</option>`;
}

function addToCart(id) {
    cart.push(id);
    saveCart();
}
//on change
//saveCart(cart, cartKey)
function saveCart() {
    let savedCart = JSON.stringify(cart);
    window.localStorage.setItem(cartKey, savedCart);
    document.querySelector('.cart span').textContent = cart.length;
    loadCart();
}

//on Page Load
//cart = loadCart(cartKey)

function loadCart() {
    let loadedCart = window.localStorage.getItem(cart);

    if (loadedCart) {
        return JSON.parse(loadedCart);
    } else {
        return "{}";
    }

}



/*function onLoadingCartNumbers(id) {
    let itemNumbers = localStorage.getItem(id);

    if (itemNumbers) {
        document.querySelector('.cart span').textContent = itemNumbers;
    }
}



function cartNumbers(id) {
    let itemNumbers = localStorage.getItem(id);
    itemNumbers = parseInt(itemNumbers);

    if (itemNumbers) {
        localStorage.setItem(id, itemNumbers + 1);
        document.querySelector('.cart span').textContent = itemNumbers + 1;
    } else {
        localStorage.setItem(id, 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadingCartNumbers(id); */
let cartKey = 'productNumbers';

function onLoadingCartNumbers() {
    let itemNumbers = localStorage.getItem(cartKey);

    if (itemNumbers) {
        document.querySelector('.cart span').textContent = itemNumbers;
    }
}



function cartNumbers(cart) {
    for (let i = 0; i < cart.length; i++) {
        let itemNumbers = localStorage.getItem(cartKey);
        itemNumbers = parseInt(itemNumbers);

        if (itemNumbers) {
            localStorage.setItem(cartKey, itemNumbers + 1);
            document.querySelector('.cart span').textContent = itemNumbers + 1;
        } else {
            localStorage.setItem(cartKey, 1);
            document.querySelector('.cart span').textContent = 1;
        }
    }
    setItem(cart);
}


function setItem(cart) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    if (cartItems != null) {
        cartItems = cart.id + 1;
    }

}

/*function totalCost(price) {
 let itemCost = localStorage.getItem('total cost');

if (itemCost != null) {
   itemCost = parseInt(itemCost);
   localStorage.setItem('total cost', );
    } else {
    localStorage.setItem('total cost',);
}

} */

onLoadingCartNumbers();
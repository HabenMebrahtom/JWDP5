let cartKey = "itemNumbers";


// add ietms id to the cart in local storage

function addItem(id) {
    let addedCart = getCart();
    addedCart.push(id);
    let savedCart = JSON.stringify(addedCart);
    window.localStorage.setItem(cartKey, savedCart);

}

// check the cart size from local storage
function checkCartSize() {
    return getCart().length;
}

// get the cart 
function getCart() {
    let loadedCart = window.localStorage.getItem(cartKey);
    if (loadedCart) {
        return JSON.parse(loadedCart);
    } else {
        return [];
    }

}


//delete an item 

function deleteCartItem(id) {

}
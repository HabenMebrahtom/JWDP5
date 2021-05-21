const onloadingCartNumbers = () => {
    let itemNumber = localStorage.getItem('cartNumber');
    if (itemNumber) {
        document.getElementById('cart-number').textContent = itemNumber;
    }
};

let itemNumber = localStorage.getItem('cartNumber');
itemNumber = parseInt(itemNumber);

if (itemNumber) {
    localStorage.setItem('cartNumber', itemNumber + 1)
    document.getElementById('cart-number').textContent = itemNumber + 1;
} else {
    localStorage.setItem('cartNumber', 1);
    document.getElementById('cart-number').textContent = 1;
}

setItems();
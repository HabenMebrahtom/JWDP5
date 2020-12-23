function onLoadingCartNumbers(id) {
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
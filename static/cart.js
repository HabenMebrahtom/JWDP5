 const cartArr = [];
 const cartTotalPrice = [];
 let productId = [];


 const params = new URLSearchParams(document.location.search);
 const id = params.get('id');


 const getCart = () => {

     for (const [key, value] of Object.entries(localStorage)) {
         cartArr.push(JSON.parse(value));
         console.log(cartArr);
     }

     for (let i = 0; i < cartArr.length; i++) {
         productId.push(cartArr[i].id);
         console.log(productId);
     }
 }

 getCart();

 if (cartArr < 1) {
     alert('Your cart is empty, please select some items!');
     location.href = 'index.html';
 }

 if (cartArr.length > 0) {
     const cartItems = document.getElementById('cart-items');

     for (let i = 0; i < cartArr.length; i++) {
         const totalTimesQuantity = parseInt(cartArr[i].price) * cartArr[i].quantity;
         const cartItem = document.createElement('tr');
         cartItem.innerHTML += `
         <th scope="row"><img src="${cartArr[i].imageUrl}" id="cart-image"></th>
         <td>${cartArr[i].name}</td>
         <td>${cartArr[i].quantity}</td>
         <td>$${totalTimesQuantity}</td>
         <td><i class="far fa-trash-alt" id="removeCartItem"></i></td>
        `;

         cartItems.appendChild(cartItem);

         const calculateTotalPrice = () => {
             const totalTimesQuantity = parseInt(cartArr[i].price) * cartArr[i].quantity;
             cartTotalPrice.push(totalTimesQuantity);
             console.log(cartTotalPrice);
         }

         calculateTotalPrice();

         let totalPrice = cartTotalPrice.reduce((accumulator, currentvalue) => accumulator + currentvalue);
         const totalPriceDisplay = document.getElementById('totalPrice');
         totalPriceDisplay.innerHTML = `$${totalPrice}`;

         const removeItems = () => {
             const removeCartItem = document.getElementById('removeCartItem');
             removeCartItem.value = Object.keys(localStorage)[i];

             removeCartItem.onclick = () => {

                 if (removeCartItem.value) {
                     localStorage.removeItem(removeCartItem.value);
                     location.reload();
                 }

             };
         }

         removeItems();

     }

 }
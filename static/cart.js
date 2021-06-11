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

 const fnameInput = document.getElementById('fname');
 const lnameInput = document.getElementById('lname');
 const emailInput = document.getElementById('email');
 const cityInput = document.getElementById('city');
 const stateInput = document.getElementById('state');
 const zipCodeInput = document.getElementById('zipCode');
 const submitBtton = document.getElementById('submitButton');



 function ValidateEmail(mail) {
     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
         return (true)
     }
     alert("You have entered an invalid email address!")
     return (false)
 }

 const checkValidation = () => {

     if (fnameInput.value != " " &&
         lnameInput.value != " " &&
         ValidateEmail(emailInput.value) != false && cityInput.value != " " &&
         stateInput.value != " " &&
         zipCodeInput.value != " ") {
         return true;
     } else if (fnameInput.value == ' ') {
         alert('Enter Your First Name');
         fnameInput.style.border += "thin solid red";
         return false;
     } else if (lnameInput.value == ' ') {
         alert('Enter Your Last Name');
         lnameInput.style.border += "thin solid red";
         return false;
     } else if (emailInput.value != ValidateEmail(mail)) {
         fnameInput.style.border = "thin solid red";
         return false;
     } else if (cityInput.value == ' ') {
         alert('Enter Your City Adress');
         cityInput.style.border += "thin solid red";
         return false;
     } else if (stateInput.value == ' ') {
         alert('Enter Your State');
         fnameInput.style.border += "thin solid red";
         return false;
     } else if (zipCodeInput.value == ' ') {
         alert('Enter Your Post code');
         zipCodeInput.style.border += "thin solid red";
         return false;
     } else {
         return false;
     }
 }


 submitButton.onclick = ($event) => {
     $event.preventDefault();


     if (checkValidation()) {
         const post = async() => {
             const body = {
                 contact: {
                     fname: fnameInput.value,
                     lname: lnameInput.value,
                     email: email.value,
                     adess: cityInput.value,
                     stateInput: stateInput.value,
                     zipCode: zipCodeInput.value
                 },

                 products: productID
             }

             const rawResponse = await fetch('http://localhost:3000/api/teddies' + '/order', {
                 method: 'POST',
                 headers: {
                     'accept': 'application/json',
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(body)
             });

             const content = await rawResponse.json();


             const orderTotal = [];
             for (let i = 0; i < cartArr.length; i++) {
                 orderTotal.push(content.products[i].price / 100 * cartArr[i].quantity);

             }

             const orderTotalFormated = orderTotal.reduce((accumulator, currentvalue) => accumulator + currentvalue).toFixed(2);

             localStorage.clear();

             window.location.href = 'confirmation.html' + '?totalPrice=' + orderTotalFormatted + '&orderID=' + content.orderId;
         };

         post();
     } else {
         console.error('Form validation is not passed');
     }
 }
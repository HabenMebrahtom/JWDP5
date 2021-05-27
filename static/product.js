const getApi = async() => {

        const params = new URLSearchParams(document.location.search);
        const id = params.get('id');



        try {
            const response = await fetch('http://localhost:3000/api/teddies/' + id);
            if (response.ok) {

                const jsonResponse = await response.json();
                console.log(jsonResponse);
                const bootstrapClass = document.createElement('div');
                product.innerHTML += `
          <div class="card my-3 shadow p-3 mb-5 rounded">
            <div class="embed-responsive embed-responsive-16by9">
                <img class="card-img-top embed-responsive-item" src="${jsonResponse.imageUrl}" alt="">
            </div>
            <div class="card-body">
                <div class="card-text d-flex justify-content-around align-items-center text-capitalize">
                    <h5 class="fw-bolder">${jsonResponse.name}</h5>
                    <span class=""><i class="fas fa-dollar-sign"></i> $${(jsonResponse.price/100).toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-center align-items-center my-3">
                  <select id="color"  name="color" class="form-select form-select-sm form-select-lg px-4 py-2" aria-label=".form-select-sm products-color w" > 
                    <option> Chose the color</option>
                    ${jsonResponse.colors.map(color => {
                      return `<option value="${color}" >${color}</option>`;
                    })}   
                  </select>
                </div>
                <div class="d-flex justify-content-center align-items-center my-3">
                  <select id="qty" name="quantity" class="form-select form-select-sm form-select-lg mb-3 px-4  py-2" aria-label=".form-select-lg products-quantity w">
                    <option selected> Select the quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                   <button  id="add-cart" "class="btn px-4">Add To Cart</button>
                </div>
            </div>   
        </div>
        `;

            document.getElementById('product-items').appendChild(bootstrapClass);
 
          
            
            const cartNumbers = document.getElementById('add-cart');
            
            
                
            const cartObject = () => {
                
            cartNumbers.addEventListener('click', (option) => {
              option.preventDefault();
              location.href = 'index.html';

                const qty = document.getElementById('qty');
                const select = document.getElementById('color')
                   
                if(qty.value > 0) {
                
                  let cartObject = {
                        name: jsonResponse.name,
                        color: select.value,
                        price: (jsonResponse.price/100).toFixed(2),
                        id: jsonResponse._id,
                        quantity: qty.value,
                        imageUrl: jsonResponse.imageUrl
                    }
                    
                    const localStKey = `${jsonResponse.name}, ${select.value}`
                    window.localStorage.setItem(localStKey, JSON.stringify(cartObject));  
                }
            });
        
        }

        cartObject();
 

        } else {
            throw new Error("We couldn't generate the product, please try later ");
        }
    } catch (error) {
        console.log(error);
    }
}

getApi();
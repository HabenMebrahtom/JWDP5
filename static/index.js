const getApi = async() => {
    try {

        const response = await fetch('http://localhost:3000/api/teddies');

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            jsonResponse.forEach(product => {
                const bootstrapClass = document.createElement('div');
                bootstrapClass.innerHTML = `
                <div class="col-10 col-sm-6 col-lg-4 mx-auto col-sm-6 col-lg-4 my-3">
           <div class="card my-3 mx-3 shadow p-3 mb-5 rounded">
                <div class="embed-responsive embed-responsive-16by9">
                    <a href="product.html?id=${product._id}+productName=${product.name}"><img class="card-img-top embed-responsive-item" src="${product.imageUrl}" alt=""></a>
                </div>
            <div class="card-body">
               <div class="card-text d-flex justify-content-between align-items-center text-capitalize">
                  <h5>${product.name}</h5>
                 <span> $${(product.price/100).toFixed(2)}</span>
                     </div>
                </div>   
           </div>
        </div>
                `;

                document.getElementById('product-items').appendChild(bootstrapClass);
            })

        } else {
            throw new Error("We couldn't generate our products page. Please try again!")
        }
    } catch (error) {
        console.log(error);
    }
};

getApi();
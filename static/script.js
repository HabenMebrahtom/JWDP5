async function getData() {
    const response = await fetch('http://localhost:3000/api/teddies');
    const data = await response.json();
    console.log(data);
    data.forEach(teddyData => {
        const product = document.createElement('div')
        product.innerHTML = ` 
        <div class="col-10 col-md-6 col-lg-4 m-auto">
           <div class="card my-3 mx-3 shadow p-3 mb-5 rounded">
                <div class="embed-responsive embed-responsive-16by9">
                    <a href="product.html?id=${teddyData._id}"><img class="card-img-top embed-responsive-item" src="${teddyData.imageUrl}" alt=""></a>
                </div>
            <div class="card-body">
               <div class="card-text d-flex justify-content-between align-items-center text-capitalize">
                  <h5>${teddyData.name}</h5>
                 <span><i class="fas fa-euro-sign"></i> ${(teddyData.price/100).toFixed(2)}</span>
                     </div>
                </div>   
           </div>
        </div>
        `;

        document.getElementById('product-items').appendChild(product);

    });

}

getData();
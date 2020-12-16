async function getItemData() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log(id);
    const response = await fetch('http://localhost:3000/api/teddies/' + id);
    const data = await response.json();
    console.log(data);
    const product = document.createElement('div')
    product.innerHTML = ` 
    <div class="card my-3">
            <div class="embed-responsive embed-responsive-16by9">
                <a href="item.html?id=${data._id}"><img class="card-img-top embed-responsive-item" src="${data.imageUrl}" alt=""></a>
            </div>
            <div class="card-body">
                <div class="card-text d-flex justify-content-between align-items-center text-capitalize">
                    <h5>${data.name}</h5>
                    <span><i class="fas fa-euro-sign"></i> ${data.price}</span>
                </div>
            </div>   
    </div>
    `;

    document.getElementById('product-items').appendChild(product);
}

getItemData();
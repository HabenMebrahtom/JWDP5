async function getData() {
    const response = await fetch('http://localhost:3000/api/teddies');
    const data = await response.json();
    data.forEach(teddyData => {
        document.getElementById('product-item').innerHTML = `
           <div class="card my-3">
                <div class="embed-responsive embed-responsive-16by9">
                    <img class="card-img-top embed-responsive-item" src="${teddyData.imageUrl}" alt="">
                </div>
                   <div class="card-body">
                     <div class="card-text d-flex justify-content-between align-items-center text-capitalize">
                        <h5>${teddyData.name}</h5>
                        <span><i class="fas fa-euro-sign"></i> ${teddyData.price}</span>
                     </div>
                </div>   
           </div>
        `;
    });
}

getData();
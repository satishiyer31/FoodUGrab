
async function getRestaurants() {

    console.log('Getting Restaurants');
    // var restaurants =[];
    var resHtml="";
    // fetch('/api/restaurants').then(response => response.json())
    // .then(data => {console.log(data); restaurants = data});

    const response = await fetch('/api/restaurants');
    const restaurants = await response.json();

    console.log(restaurants.length);
    restaurants.forEach(restaurant => {
        
    resHtml += `<div class="card mx-auto mt-3 shadow-sm" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="/assets/Img/${restaurant.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text">${restaurant.location}</p>
            <a href="/restaurant/${restaurant.id}" class="btn btn-primary">Select Restaurant</a>
        </div>
        </div>
    </div>
    </div>`
    
    

    });
    console.log(resHtml);
    const resDiv = document.createElement('div');
    resDiv.setAttribute("class","row my-3");
    resDiv.innerHTML = resHtml;
    
    document.querySelector('body').appendChild(resDiv);

}

getRestaurants();


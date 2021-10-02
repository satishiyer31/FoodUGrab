

async function getMenuItems() {

    console.log('Getting MenuItems');
    
    var menu="";
    var url = document.URL;
    // console.log(url);

    const resID = url.split('/');
    const param = resID[resID.length-1];

    const response = await fetch(`/api/restaurants/${param}`);
    const data = await response.json();
    
    const menuItems = data.menu_items; 
    // console.log(data.menu_items);
    menuItems.forEach(menuItem => {
        
    menu += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${menuItem.name} : $${menuItem.price}  </h5>
            <p class="card-text">${menuItem.description}</p>
            <a href="" class="btn btn-primary" data-restaurantID =${param} data-menuItem=${menuItem.id} data-itemName=${menuItem.name} data-price=${menuItem.price} data-toggle="modal" data-target="#myModal"> Add Item : $${menuItem.price}</a>
        </div>
        </div>
    </div>
    </div>`
    
    

    });
    console.log(menu);
    const resDiv = document.createElement('div');
    resDiv.innerHTML = menu;
    
    document.querySelector('body').appendChild(resDiv);

}

getMenuItems();

document.addEventListener('click', function(e){
    e.preventDefault();
    const modal = document.querySelector("#myModal");
    if(e.target.matches('a')){
        modal.modal('show');
    }
    
})
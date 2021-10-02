

async function getMenuItems() {

    // console.log('Getting MenuItems');
    
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
            <p class="card-text">${menuItem.description}
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" min="1" value="1">
            </p>
            <a id ="${menuItem.id}"  href="" class="btn btn-primary" data-restaurantID =${param} data-menuItem=${menuItem.id} data-itemName=${menuItem.name} data-price=${menuItem.price} data-toggle="modal" data-target="#myModal"> Add Item : $${menuItem.price}</a>
        </div>
        </div>
    </div>
    </div>`
    
    

    });
    // console.log(menu);
    const resDiv = document.createElement('div');
    resDiv.innerHTML = menu;
    
    document.querySelector('#menuitem').appendChild(resDiv);

}

getMenuItems();

document.addEventListener('click', function(e){
    e.preventDefault();
    const basket = document.querySelector('#basket');
    const basketDiv = document.createElement('div');
    

    if(e.target.matches('a')){
        
        const itemName = document.createElement('span');
        // itemName.textContent = e.target.dataset.itemName;
        console.log(e.target);
        basketDiv.appendChild(itemName);

        basket.appendChild(basketDiv);
        
    }

    if(e.target.matches('input')){
        
        
        
    }
    
})
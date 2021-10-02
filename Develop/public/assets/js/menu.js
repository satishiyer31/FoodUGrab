

async function getMenuItems() {

    console.log('Getting MenuItems');
    
    var menu="";
    

    const response = await fetch('/api/restaurants/:id');
    const menuItems = await response.json();

    console.log(menuItems);
    menuItems.forEach(menuItem => {
        
    menu += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${menuItem.name}</h5>
            <p class="card-text">${menuItem.description}</p>
            <a href="/restaurant/${menuItem.price}" class="btn btn-primary">Add Item</a>
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
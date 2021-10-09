
var orderItems =[];

async function getMenuItems() {

    // console.log('Getting MenuItems');
    
    var menu="";
    var url = document.URL;
    // console.log(url);

    const resID = url.split('/');
    const param = resID[resID.length-1];
    
    sessionStorage.setItem("restaurant_id",param);

    const response = await fetch(`/api/restaurants/${param}`);
    const data = await response.json();
    
    const menuItems = data.menu_items; 
    // console.log(data.menu_items);
    menuItems.forEach(menuItem => {
        
    menu += `<div class="card mx-auto mt-2" id="menu-card" style="max-width: 400px;">
    <div class="row g-0">
        <div class="col-md-4" style="max-width: 200px;">
        <img src="/assets/Img/${menuItem.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${menuItem.name} : $${menuItem.price}  </h5>
            <p class="card-text"> <h6> ${menuItem.description} </h6>
                <label for="quantity${menuItem.id}">Quantity</label>
                <input type="number" id="quantity${menuItem.id}" name="quantity" min="1" value="1" style="max-width: 40px;">
            </p>
            <a id ="${menuItem.id}" class="btn btn-primary" data-restaurantID ="${param}" data-menuItem="${menuItem.id}" data-itemName="${menuItem.name}" data-price="${menuItem.price}"> Add Item : $${menuItem.price}</a>
        </div>
        </div>
    </div>
    </div>`
    
    

    });
    // console.log(menu);
    const resDiv = document.createElement('div');
    resDiv.setAttribute("class","row my-3");
    resDiv.innerHTML = menu;
    
    document.querySelector('#menuitem').appendChild(resDiv);

}

getMenuItems();

LoadBasket();


function LoadBasket() {


    document.getElementById('checkoutTable').innerHTML= '';
    
    orderItems = JSON.parse(sessionStorage.getItem("orderItems"));
    console.log(orderItems);
    var tableHtml="";
    // console.log(savedOrderItems);
    if(orderItems != null ) {
        for (let index = 0; index < orderItems.length; index++) {
            
            
            
        tableHtml += `<tr>
                <td>${orderItems[index].name}</td>
                <td>${orderItems[index].qty}</td>
                <td>${orderItems[index].price}</td>
                <td><button id='deleteBtn' class= 'fa fa-trash' style='border:none' data-menuItem = "${orderItems[index].menu_id}"></button>
            </tr>`

            document.getElementById('checkoutTable').innerHTML= tableHtml;
        }
        const checkoutBtn = document.createElement('button');
        checkoutBtn.setAttribute('href', '/checkout');
        checkoutBtn.setAttribute('id','checkout');
        checkoutBtn.setAttribute('class','btn btn-success');

        checkoutBtn.textContent ="Checkout"
        document.getElementById('basket').appendChild(checkoutBtn);


    }
}

document.addEventListener('click', function(e){
    e.preventDefault();
    
    var items = {};

    if(e.target.matches('a')){
        

        if (orderItems == null) {
            orderItems =[]
        }
        
        const addItem = document.createElement('tr');
        
        const itemName = document.createElement('td');
        itemName.textContent =e.target.getAttribute("data-itemname");
        items.name = e.target.getAttribute("data-itemname");
        addItem.appendChild(itemName);
        

        const itemQty = document.createElement('td');
        const id = "quantity"+ e.target.getAttribute("data-menuItem");
        items.menu_id = e.target.getAttribute("data-menuItem");
        itemQty.textContent= document.getElementById(id).value;
        items.qty = document.getElementById(id).value;
        addItem.appendChild(itemQty);

        const itemPrice = document.createElement('td');
        itemPrice.textContent = Number(e.target.getAttribute("data-price")) * Number(itemQty.textContent= document.getElementById(id).value);
        items.price = Number(e.target.getAttribute("data-price")) * Number(itemQty.textContent= document.getElementById(id).value);
        addItem.appendChild(itemPrice);

        const del = document.createElement('td');
        del.innerHTML = `<button id='deleteBtn' class= 'fa fa-trash' style='border:none' data-menuItem = "${items.menu_id}"></button>`;
        addItem.appendChild(del);

        orderItems.push(items);

        document.getElementById('checkoutTable').appendChild(addItem);
        document.getElementById('basketTable').style.visibility = "visible";

        updateSessionStorage();
        
    }

    if(e.target.matches('button')){
        if( e.target.id == 'deleteBtn') {
        e.target.parentNode.parentNode.remove();
        orderItems = orderItems.filter(orderItem => orderItem.menu_id != e.target.getAttribute("data-menuItem"))
        document.getElementById('checkout').remove();
        updateSessionStorage();
        LoadBasket();
        }

        if( e.target.id == 'checkout')  {
            console.log("Checkout Clicked");
            this.location.replace('https://buy.stripe.com/test_14k9CjdMd8Ng5dm8ww');
            // createOrder();

        }
        
    }
    
})

function updateSessionStorage() {
    // sessionStorage.clear();
    sessionStorage.setItem("orderItems",JSON.stringify(orderItems));

}


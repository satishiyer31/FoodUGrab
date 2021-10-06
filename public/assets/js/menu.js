
var orderItems =[];

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
                <label for="quantity${menuItem.id}">Quantity</label>
                <input type="number" id="quantity${menuItem.id}" name="quantity" min="1" value="1">
            </p>
            <a id ="${menuItem.id}" class="btn btn-primary" data-restaurantID ="${param}" data-menuItem="${menuItem.id}" data-itemName="${menuItem.name}" data-price="${menuItem.price}"> Add Item : $${menuItem.price}</a>
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

LoadBasket();


function LoadBasket() {


    document.getElementById('checkoutTable').innerHTML= '';
    
    savedOrderItems = JSON.parse(sessionStorage.getItem("orderItems"));
    console.log(savedOrderItems);
    var tableHtml="";
    // console.log(savedOrderItems);
    if(savedOrderItems != null ) {
        for (let index = 0; index < savedOrderItems.length; index++) {
            
            
            
        tableHtml += `<tr>
                <td>${savedOrderItems[index].name}</td>
                <td>${savedOrderItems[index].qty}</td>
                <td>${savedOrderItems[index].price}</td>
                <td><button id='deleteBtn' class= 'fa fa-trash' style='border:none' data-menuItem = "${savedOrderItems[index].menu_id}"></button>
            </tr>`

            document.getElementById('checkoutTable').innerHTML= tableHtml;
        }
        const checkoutBtn = document.createElement('button');
        checkoutBtn.setAttribute('href', '/checkout');
        checkoutBtn.setAttribute('id','checkout');
        checkoutBtn.setAttribute('class','btn btn-success');

        checkoutBtn.setAttribute('value','Checkout');
        document.getElementById('basket').appendChild(checkoutBtn);


    }
}

document.addEventListener('click', function(e){
    e.preventDefault();
    
    var items = {};

    if(e.target.matches('a')){
        
        // const chosenMenuItem = e.target.getAttribute("data-menuItem");

        // if (orderItems && orderItems.length >0) { //Item found - Update the qty 
            
        //     for (let i = 0; i < orderItems.length; i++) {
        //         if (orderItems[i].menu_id == chosenMenuItem){
        //             //item found, update quantity
        //             console.log('Line 96 found a match');
        //             orderItems[i].qty += Number(document.getElementById(`quantity${chosenMenuItem}`).value);
        //             console.log("line 98 " + orderItems[i].qty);
        //             updateSessionStorage();
        //             LoadBasket();
        //             break;
        //         }
        //         else {
        //             items.name = e.target.getAttribute("data-itemname");
        //             items.menu_id = e.target.getAttribute("data-menuItem");
        //             // const id = "quantity"+ chosenMenuItem;
        //             items.qty = Number(document.getElementById(`quantity${chosenMenuItem}`).value);
        //             items.price = Number(e.target.getAttribute("data-price")) * Number(items.qty);
        //             orderItems.push(items);
        //             updateSessionStorage();
        //             LoadBasket();
        //         }
        //     }
        
        // } else { // Empty bag so Session storage has nothing, initialize the orderItems array
        //     orderItems = [];
            
        //     items.name = e.target.getAttribute("data-itemname");
        //     items.menu_id = e.target.getAttribute("data-menuItem");
        //     // const id = "quantity"+ chosenMenuItem;
        //     items.qty = Number(document.getElementById(`quantity${chosenMenuItem}`).value);
            
        //     console.log(e.target.getAttribute("data-price"));
        //     items.price = Number(e.target.getAttribute("data-price")) * Number(items.qty);
        //     orderItems.push(items);
        //     updateSessionStorage();
        //     LoadBasket();
        // }
        // alert(orderItems)
        
        
   
    


    
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
        document.getElementById('basket').visibility = "visible";

        updateSessionStorage();
        
    }

    if(e.target.matches('button')){
        if( e.target.id == 'deleteBtn') {
        e.target.parentNode.parentNode.remove();
        // orderItems = orderItems.filter(orderItem => orderItem.menu_id != e.target.getAttribute("data-menuItem"))
        // updateSessionStorage();
        // LoadBasket();
        }

        if( e.target.id == 'checkout')  {
            console.log("Checkout Clicked");
            this.location.replace('/checkout');
        }
        
    }
    
})

function updateSessionStorage() {
    // sessionStorage.clear();
    sessionStorage.setItem("orderItems",JSON.stringify(orderItems));

}


savedOrderItems = JSON.parse(sessionStorage.getItem("orderItems"));
console.log(savedOrderItems);


async function createOrder() {

    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            "customer_id": sessionStorage.getItem("customer_id"),
            "restaurant_id": sessionStorage.getItem("restaurant_id")
        }),
        headers: { 'Content-Type': 'application/json' }
            
    })

    if (response.ok) {
        const data =  await response.json();
        
        console.log('Order created ' + data.id);
        sessionStorage.setItem("order_id",data.id);
        var orderItems =[];
        var items ={};
        for (let index = 0; index < savedOrderItems.length; index++) {
            for (let j=0; j < parseInt(savedOrderItems[index].qty); j++){
                items.order_id = await data.id;
                items.menu_item_id = parseInt(savedOrderItems[index].menu_id);
                console.log(items);
                // orderItems.push(items);
                // console.log(orderItems);
                const response2 = await fetch('/api/orderitems',{
                    method: 'POST',
                    body: JSON.stringify(items),
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            
        }

        setTimeout(() =>
        location.replace('/order_confirmation'),3000)
    }

    
    

}

createOrder();
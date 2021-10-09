
async function getRestaurantInfo() {
    var tableHtml;
    const restaurant_id = sessionStorage.getItem("restaurant_id"); 
    const response = await fetch(`/api/restaurants/${restaurant_id}`);
    const restaurants = await response.json();
    console.log(restaurants);

    const order_id = sessionStorage.getItem("order_id");
    document.getElementById("confirmation").innerHTML =`Your order (# <b><em>${order_id} </em></b>) has been placed with <b><em>${restaurants.name}</em> </b>, located at <b><em>${restaurants.location} </em></b>. Their phone number is <b><em>${restaurants.phone}</em></b>`
    
    const orderItems = JSON.parse(sessionStorage.getItem("orderItems"));

    for (let index = 0; index < orderItems.length; index++) {
            
         tableHtml += `<tr>
                <td>${orderItems[index].name}</td>
                <td>${orderItems[index].qty}</td>
                <td>${orderItems[index].price}</td>
                
            </tr>`;

            document.getElementById('order_details').innerHTML= tableHtml;
        }

}

getRestaurantInfo();
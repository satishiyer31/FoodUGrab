
async function getAllRestaurantNames() {

    const response = await fetch(`/api/restaurants`);
    const restaurants = await response.json();
    var dropdownHtml="";
    console.log(restaurants);

    for (let index = 0; index < restaurants.length; index++) {
        
        dropdownHtml +=`<option value=${restaurants.id}>${restaurants.name}</option>`;
    }

    document.getElementById("restaurants").innerHTML = dropdownHtml;

}

getAllRestaurantNames();


document.getElementById('dropdownContainer').addEventListener('click', async (e)=> {
    e.preventDefault();
    if(e.target.matches('input')) {
        console.log('got it');
        const response = await fetch(`/api/orders/restaurants/${e.target.value}`);
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const response2 = await fetch(`api/orders/${data.id}`)
            const data2 = await response2.json()
        }
    }

});
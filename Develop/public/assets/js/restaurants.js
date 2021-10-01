

async function getRestaurants() {


    const restaurants = await fetch('/api/restaurants');

    if(restaurants) {
        console.log(restaurants);
    }

}

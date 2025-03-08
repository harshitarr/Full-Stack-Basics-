const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterindex , mainindex)
    {
        return[this.starterMenu[starterindex],this.mainMenu[mainindex]]
    }
    };


const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

let [first,second] = restaurant.categories;

[first,second]=[second,first];

console.log(first,second);

const [starter , main] = restaurant.order(2,0)

console.log(starter,main) // note the difference in o/p

console.log(restaurant.order(2,0)) // check the diff


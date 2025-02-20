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


/*const {name , categories , mainMenu } = restaurant;
console.log(name , categories , mainMenu)*/


const {name : n , categories : c , mainMenu : mm} = restaurant;

console.log(n,c,mm);


const {menu = [] , starterMenu : sm = []}= restaurant;

console.log(menu ,mm )

const arr = [7 , 8 , 9];
const badNewArr = [1 , 2 , arr[0] , arr[1] , arr[2]]
console.log(badNewArr)


const newarr = [1 , 2 , ...arr];
console.log(newarr)


console.log(...newarr)


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


  const newMenu = [...restaurant.mainMenu , 'Gnocci']  // dont forget to put arr brackets
  console.log(newMenu)
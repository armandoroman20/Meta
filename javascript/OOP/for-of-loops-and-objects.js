var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

// for( key of Object.keys(clothingItem) ) {
//     console.log(keys, ":", clothingItem[key])
// }
let keys;

for( key of Object.values(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

for( key of Object.entries(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}



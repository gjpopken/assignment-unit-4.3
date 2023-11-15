console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

//Required
function addItem(item) {
    if (!isFull(basket)) {
        basket.push(item);
        return true;
    } else {
        return false;
    }
}
//console.log('Adding eggs to my basket', '\n', addItem('eggs'), '\nBasket:', basket);
//console.log('Added some items. Now:', addItem('milk'), addItem('water'), addItem('pasta'), basket);

function listItems() {
    let list = '';
    for (let i of basket) {
        list += i + '\n';
    }
    console.log(list);
}

//listItems();

function empty() {
    basket = [];
    console.log('No more items in the basket:', basket);
}

empty();
console.log(basket);










//Stretch



function isFull(array) {
    if (array.length < maxItems) {
        return false;
    } else {
        return true;
    }
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

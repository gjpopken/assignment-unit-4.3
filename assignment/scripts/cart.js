console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (!isFull()) {
        basket.push(item);
        return true;
    } else {
        return false;
    }
}
function listItems() {
    let list = '';
    for (i of basket) {
        list += i + '\n';
    }
    console.log(list);
}


function empty() {
    basket = [];
}

function isFull() {
    if (basket.length < 5) {
       // console.log('the basket isn\'t full');
        return false;
        
    } else {
       // console.log('the basket is full');
        return true;
        
    }
}

function removeItem(item){
    const position = basket.indexOf(item);
    if (position != -1) {
        return basket.splice(position, 1);
    } else {
        return null;
    }
}


console.log('There are', basket.length, 'items in the basket', '\nIs the basket full?', isFull());

console.log('I added eggs to the basket:', addItem('eggs'), basket);
console.log('I added eggs to the basket:', addItem('eggs'), basket);
console.log('I added eyes to the basket:', addItem('eyes'), basket);
console.log('I added eggs to the basket:', addItem('eggs'), basket);
console.log('I added eggs to the basket:', addItem('eggs'), basket);
console.log('I added eggs to the basket:', addItem('eggs'), basket);
console.log('I added eggs to the basket:', addItem('eggs'), basket);

console.log('Is it full now?', isFull());

listItems();

console.log('I removed', removeItem('eyes'));

console.log('Now we have', basket);

empty();

console.log('I\'m emptying my basket. Now:', basket);











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

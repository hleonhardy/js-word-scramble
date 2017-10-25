let candy = new Map([]);

candy.set('red', 'cherry');
candy.set('green', 'lime');
candy.set('blue', 'blue razz');
candy.set('purple', 'grape');
candy.set('orange', 'peach');

/* for (let [color, flavor] of candy) {
    console.log(`The ${flavor} flavor is colored ${color}`);
} */

function returnFlavor(color) {
    // pithy docstring 

    if (candy.has(color)) {
        console.log(`Flavor: ${candy.get(color)}`);
    } else {
        console.log("Nope.");
    } // endif
}//end func

returnFlavor('orange');

function oneFlavor(color) {
    if (candy.has(color)) {
        return candy.get(color);
    } else {
        return null;
    } // endif
}

function returnFlavors(colorArr) {
    let flavas = colorArr.map(oneFlavor);
    return flavas;
}


let colorArr = ['red','blue','yellow'];
returnFlavors(colorArr);
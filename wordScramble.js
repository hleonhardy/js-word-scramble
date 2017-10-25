"use strict";

function wordScramble(word) {

    let num1, num2, temp;
    let chars = word.split("");
    let nMax = word.length;

    for (let i = 0; i < chars.length; i += 1 ) {
        num1 = Math.floor(Math.random() * nMax);
        num2 = Math.floor(Math.random() * nMax);

        temp = chars[num2];
        chars[num2] = chars[num1];
        chars[num1] = temp;
    }

    return chars.join("");

}

let word = "helloo";
let scrambledWord = wordScramble(word);
console.log(scrambledWord);
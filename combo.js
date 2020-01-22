console.log('COMBO');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd = (int) => {
    if (int % 2 === 0) {
        return "Even!";
    } else {
        return "Odd!";
    }
};

console.log(evenOdd(3));

// Challenge #2
// given a number, find its opposite. 2 = -2

const oppositeNum = (num) => {
    return opposite = num - (num + num);
};

console.log(oppositeNum(4));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

//const removeSpaces = (arr) => {               // Iterates through an array and removes spaces or empty strings
//    for (i in arr) {
//        if (arr[i] === " " || arr[i] === "") {
//            arr.splice(i,1);
//        };
//    };
//    return arr;
//}

//console.log(removeSpaces([" ", "a", "", "s", " ", "s"]));


//const palindromeCheck = (str) => {
//    const lowerStr = str.toLowerCase();       // Convert input to lowercase
//    const removePunc = lowerStr.replace(/[^A-Za-z0-9]/g,""); // Replace all punctuation with empty string
//    const strArr = removePunc.split('');      // Convert input string to array
//    const noSpacesArr = removeSpaces(strArr); // Remove empty spaces from array
//    const noSpaces = noSpacesArr.join('');    // Convert the first, unreversed array back to a string for comparison
//    const revArr = noSpacesArr.reverse();     // Reverse the space-less array
//    const joinRevArr = revArr.join('');       // Convert the reversed array into a string
//    if (noSpaces === joinRevArr) {            // Compare the reversed and unreversed strings
//        return true;
 //   } else {
//        return false;
//    }
//}

const palindromeCheck2 = (str) => {
        const re = /[\W_]/g;                                          //replace unwated symbols with "re"
        const lowRegStr = str.toLowerCase().replace(re, '');          //Convert to lowercase, replace "re" with ''
        const reverseStr = lowRegStr.split('').reverse().join('');    //Convert string to array, then reverse, then convert back to a string
        if (reverseStr === lowRegStr) {                               //Compare initial, lowercased string with reversed string
            return true;
        } else {
            return false;
        }
        
    }

console.log(palindromeCheck2('Mr=. Owl ate! my{} metal. worm'));

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

const isWide = (animal) => {
    const lowerCaseAnimal = animal.toLowerCase();
    console.log(lowerCaseAnimal);
    if (lowerCaseAnimal === "alligator") {
        console.log("Small!");
    } else {
        console.log("Wide!");
    };
}

console.log(isWide("tarantula"));
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

const removeSpaces = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            arr.splice(i,1);
        };
    };
    return arr;
}

console.log(removeSpaces([" ", "a", " ", "s", " ", "s"]));


const palindromeCheck = (str) => {
    let lowerStr = str.toLowerCase(); // Convert input to lowercase
    let strArr = lowerStr.split(''); // Convert input string to array
    let noSpacesArr = removeSpaces(strArr); // Remove empty spaces from array
    let noSpaces = noSpacesArr.join(''); // Convert the first, unreversed array back to a string for comparison
    let revArr = noSpacesArr.reverse(); // Reverse the space-less array
    let joinArr = revArr.join(''); // Convert the reversed array into a string
    if (noSpaces == joinArr) {     // Compare the reversed and unreversed strings
        return true;
    } else {
        return false;
    }
}

console.log(palindromeCheck('Mr Owl ate my metal worm'));

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.


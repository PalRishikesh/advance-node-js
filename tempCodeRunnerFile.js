let str = "Hello, How are you";
/** Conver Whole string into single array */
let wholeArray = str.split();
let wholeArray1 = [str]
// console.log(wholeArray);
// console.log(wholeArray1);

/** Converting every character including space and comma */
let charArray1 = str.split('');
let charArraywithSpace = str.split(' ');
let charArraywithComma= str.split(','); // You can add anything in split function
let charArray2= [...str];
// console.log(charArraywithSpace);
// console.log(charArraywithComma);

/** Replacing the character from string */
let removeSingleChar = str.replace('H','_');
// console.log(removeSingleChar);
let removeAllChar = str.replace(/H/g,"_");
// console.log(removeAllChar);


/** Sub string of string */
let subStringWithRange = str.substring(7,10);
// console.log(subStringWithRange);
let removingFirstCharacter = str.substring(1,str.length-1);
// console.log(removingFirstCharacter);
let removingLastCharacter = str.substring(0,str.length);
console.log(removingLastCharacter);








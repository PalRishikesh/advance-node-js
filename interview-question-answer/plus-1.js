let digits = [1, 2, 9];

// let rawSum = "";
// for (let index = 0; index < digits.length; index++) {
//   rawSum = rawSum + "" + digits[index];
// }
// rawSum = Number(rawSum) + 1;
// console.log(rawSum);
// console.log(String(rawSum).split(""));

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      // It will increment and return // 1,2,9 (9 will change to 0 and 2 will come 3 and whole array will return or if is 9 and loop is over it will append 1 at beginng)
      digits[i]++;
      return digits;
    }
  }
  // this will work only last value is zero
  return [1, ...digits]; // digits.unshift(1)
};
console.log(plusOne(digits));

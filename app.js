// ######################################## ALIEN NUMERAL ########################################

// Input: s = "AAA"
// Output: 3
// Explanation: AAA = 3.

// Input: s = "LBAAA"
// Output: 58
// Explanation: L = 50, B= 5, AAA = 3.

// Input: s = "RCRZCAB"
// Output: 1994
// Explanation: R = 1000, CR = 900, ZC = 90 and AB = 4.

let obj = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
};

// function alienNumeral(str) {
//   let sum = 0;
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let key in obj) {
//       if (str[i] == key) {
//         arr.push(obj[key]);
//       }
//     }
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (j === arr.length - 1) {
//       if (arr[j] <= arr[j - 1]) {
//         sum += arr[j];
//       }
//     }

//     if (arr[j] < arr[j + 1]) {
//       sum += arr[j + 1] - arr[j];
//     } else if (arr[j] > arr[j - 1]) {
//     } else if (arr[j] >= arr[j + 1] || arr[j + 1] >= arr[j + 2]) {
//       sum += arr[j];
//     }
//   }
//   return sum;
// }

function alienNumeral(str) {
  let sum = 0;

  for (let j = 0; j < str.length; j++) {
    if (j === str.length - 1) {
      if (obj[str[j]] <= obj[str[j - 1]]) {
        sum += obj[str[j]];
      }
    }

    if (obj[str[j]] < obj[str[j + 1]]) {
      sum += obj[str[j + 1]] - obj[str[j]];
    } else if (obj[str[j]] > obj[str[j - 1]]) {
    } else if (
      obj[str[j]] >= obj[str[j + 1]] ||
      obj[str[j + 1]] >= obj[str[j + 2]]
    ) {
      sum += obj[str[j]];
    }
  }
  return sum;
}

const input1 = 'AAA';
const input2 = 'LBAAA';
const input3 = 'RCRZCAB';

console.log(alienNumeral(input1));
console.log(alienNumeral(input2));
console.log(alienNumeral(input3));

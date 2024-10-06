// write a function 'sumTogether' that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.
//both arrays are the same length
/*
const arr1 = [10,20,30];
const arr2 = [15,25,34];

function sumTogether(arr1, arr2){
  let totalArr = [];

  for(let i = 0; i < arr1.length; i++){
    const sum = arr1[i] + arr2[i];
    totalArr.push(sum);
  }
  return totalArr;
}

sumTogether(arr1, arr2); 
*/
/*
const string = "2";
//const string = "today";

function toNumber(string){
  const numberString = +string;
  if(isNaN(numberString)){
    return 0;
  } else {
    return numberString;
  }
}

console.log(toNumber(string));
*/
/*
const a = 0;

function isTruthy(a){
  if(a === false 
    || a === 0 
    || a === '' 
    || a === "" 
    || a === null 
    || a === undefined 
    || a === NaN){
    return 'falsey'; 
  } else {
    return 'truthy';
  }
}

console.log(isTruthy(a));
*/

// a function 'eitherNotBoth' that takes in a number & returns 'true' if the number is divisible by either 3 or 5 but not both. Return 'false' otherwise.

//const num = 3; //true
//const num = 13; //false
//const num = 34;
//const num = 45; //true
//const num = 30;

/*
function eitherNotBoth(num){
  if(num % 15 === 0){
    return false;
  }
  if(num % 3 === 0 || num % 5 === 0){
    return true;  
  } else {
    return false;
  }

}

console.log(eitherNotBoth(num));
*/

//FizzBuzz
/*
const numbers = [1,3,5,9,11,12,20];

function fizzBuzz(numbers){
  let output = '';
  for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] % 3 === 0){
      output += 'fizz';
    }
    if(numbers[i] % 5 === 0){
      output += 'buzz';
    }
  }    
  return output;
} 
console.log(fizzBuzz(numbers));
*/
const array = [4,6,2,8,1,9,3,7,5,10];

function sortUp(array){
  array.sort((a, b) => a - b);
}

console.log(sortUp(array));






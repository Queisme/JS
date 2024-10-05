/*
function hasOne(array) {
  for(let i = 0; i <= array.length; i++){
    if(array[i] === 1){
      return true;
    } else if (i === array.length){
      return false;
    }
  }
}

console.log(hasOne([1]));
console.log(hasOne([1, 2, 3]));
console.log(hasOne([3, 1, 2]));
console.log(hasOne([3, 2, 1]));
console.log(hasOne([1, 1]));
console.log(hasOne([1, 1, 1]));
console.log(hasOne([]));
console.log(hasOne([2,3,4]));
console.log(hasOne([6,7,8,9,10,11]));
*/
/*
function sumEven(array) {
  let totalEven = 0;
  for(let i = 0; i < array.length; i++){
    console.log(`Number: ${array[i]}`);
    if(array[i] % 2 === 0){
      totalEven += array[i];
    }
  }
  return totalEven;
}



//console.log(sumEven([2])); //2
//sumEven([1,2,3,4,5]); //6
console.log(sumEven([9,12,14,16,19])); //42

*/
/*
function unique(array) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
      const element = array[i];
      if(newArray.indexOf(element) === -1){
        newArray.push(array[i])
      }
    }
    return newArray;
}

console.log(unique([1,2,3]));
console.log(unique([1,2,2,3,4,3]));
//unique([1,1,1,1,1,1,1]);
*/
/*
function addOne(array) {
  for(let i = 0; i < array.length; i++){
    array[i] = (array[i] + 1);
  } 
  console.log(array);
   
}

addOne([1]);
addOne([1, 2, 3]);
addOne([9, 12, 14, 16, 19]);
*/

function removeOccurrences(array, num) {
  for(let i = 0; i < array.length; i++){
    console.log(`i is: ${i}`);
    console.log(`Array[i] is: ${array[i]}`);
    console.log(`Num is: ${num}`);
    if(array[i] === num){
      array.splice(i, 1);
    }
  }
  console.log(array);
}


removeOccurrences([5,6,7], 6)
removeOccurrences([1,2,3], 1)
removeOccurrences([1,2,2,3,4,3], 2)
removeOccurrences([1,1,1,1,1,1,1], 1)
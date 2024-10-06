/*
function summation(n){
  let sum = 0;
  for(let i = 1;i <= n;i++){
    sum = sum + i;
    console.log(sum);
  }
  return sum;
}

console.log(summation(5));


function factorial(x){
  let sum = 1;
  for(let i = x;i >= 1;i--){
    sum = sum * i;
    console.log(sum);
  }
  return sum;
}

console.log(factorial(5));
*/

/*
function topDouble(value, top) {
  let i = value;
  let answer;
  while(i < top){
    answer += value * value;
    console.log("Is this working?");
    console.log(answer);
  }
  return answer;
}

console.log(topDouble(2, 100));
*/
/*
function double(number, top){
  let i = number;
  while( number <= top){
    let answer = number * 2;
    console.log('Is this working?');
    console.log(answer);
    i++;
    break;
  }
}

double(2, 100);

*/
/*
function count(n, top){
  i = n;
  while(n <= top){
    n *= 2;
    if(n > top - n){
      break;
    }
    i++;
  }
  return (n);
}

console.log(count(2, 100));

if(num1 > num2){
  return num2;
} else {
  return num1;
}
*/
/*
function maxSum(num) {
  let total = 0;
  for(let i = 1;i <= num;i++){
      total += i;
    }
    return total;
  
}

console.log(maxSum(5));
*/
/*
function isAllX(string) {
  for(let i = 0; i < string.length; i++){
    if(string[i].toLowerCase() !== 'x'){
      return false;
    } else if(i === string.length - 1){
      return true;
    }
  }
}


console.log(isAllX('xxxx')); //true
console.log(isAllX('X')); //true
console.log(isAllX('XxXxXXXxx')); //true
console.log(isAllX("Xxxpizza")); //false
console.log(isAllX("xPizzaX")); //false
console.log(isAllX("XxxxQxxxX")); //false
console.log(isAllX("XxxxxxxXq")); //false

*/
/*
function findFirstX(string) {
    return string.indexOf('x');
}


console.log(findFirstX('xxxx')); 
console.log(findFirstX('X')); 
console.log(findFirstX('XxXxXXXxx')); 
//console.log(findFirstX("Xxxpizza")); 
//console.log(findFirstX("xPizzaX")); 
//console.log(findFirstX("XxxxQxxxX")); 
//console.log(findFirstX("XxxxxxxXq")); 
*/
/*
function splitAtX(string){
  const xIndex = string.indexOf('x');
  const frontX = string.slice(0, xIndex);
  const backX = string.slice(xIndex + 1);

  if(frontX.length > backX.length){
    return frontX;
  } else {
    return backX;
  }

};

//console.log(splitAtX("Happyxdays"));
//console.log(splitAtX("before the x is long"));
//console.log(splitAtX("10xDeveloper"));
//console.log(splitAtX("before the x is shorter than after"));
*/
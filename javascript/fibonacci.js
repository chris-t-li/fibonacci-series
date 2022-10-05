function fibonacci(num) {
  const fibArr = [0,1];

  if(num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    for(i = 2; i <= num; i++) {
      fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
  }
  return fibArr[fibArr.length-1];
}

console.log(fibonacci(3))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

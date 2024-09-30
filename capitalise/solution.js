function capitalise(word) {
  let firstPart = word.substring(0,1);
  let secondPart = word.substring(1,word.length);
  firstPart = firstPart.toUpperCase();
  secondPart = secondPart.toLowerCase();
  return firstPart + secondPart;
}

console.log(capitalise('WORLD'));
// I recommend you start by calling capitalise with the string "hello"

// Advanced hint: When you've called the function with a string, you can also run this file with a runtime called bun (just run bun <path-to-file>)
// bun runs JS files like node but with a few differences - can you spot any differences?

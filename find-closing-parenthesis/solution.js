// function findClosingParenthesis(str, n) {
//   let count = 0;
//   let i = n;

//   while (i < str.length) {
//     if (str[i] === "(") {
//       count++;
//     } else if (str[i] === ")") {
//       count--;
//     }

//     if (str.length === 0) {
//       return i;
//     }

//     i++;
//   }

//   // return -1;
// }



function findClosing(str,n){
  let brackets = 2;
  let i = 0;
  while (brackets !==0){
    if(str[i] === '('){
      brackets-=1;
    }
    if(brackets ===0){
      i--;
    }
    i++;
  }

  console.log(i);
}

console.log(findClosing("Hello, (world). (Something Else).", 2)); // should return 31
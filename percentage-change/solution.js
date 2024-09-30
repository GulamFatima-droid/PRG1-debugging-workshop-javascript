function calculatePercentageDifference(original, newAmount) {
  const difference = (newAmount - original);
  let percentageDifference = (difference / original) * 100;
  return percentageDifference.toFixed(0);
}

console.log(calculatePercentageDifference(100, 120)); // should return -20 as there's been a 20% decrease from 50 to 40

function convertFromPenceToPounds(pence) {
  const pounds = pence / 100;
  return `£${(pounds.toFixed(2))}`; // Format to two decimal places
}

console.log(convertFromPenceToPounds(0)); // should return "£12.99"

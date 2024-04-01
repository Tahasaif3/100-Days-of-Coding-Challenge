let totalPricesSet1 = [1000,2000,3000];
let totalPricesSet2 = [2500,4500,5500];
let combinedPrices = [...totalPricesSet1,...totalPricesSet2.sort((a,b) => a-b)];
console.log(combinedPrices)

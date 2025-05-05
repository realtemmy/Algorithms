// Brute force
var maxProfit = function (prices) {
  let max = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      max = Math.max(max, prices[i] - prices[j]);
    }
  }
  return max;
};

// Optimized
const maxProfit2 = function (prices) {
  let minPrice = Infinity,
    maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice){
      minPrice = prices[i]
    }else{
      maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
  }

  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy on day 2 and sell on day 5)
console.log(maxProfit2([7, 6, 4, 3, 1])); // Output: 0 (No transactions are done, i.e. max profit = 0)
console.log(maxProfit2([2, 4, 1])); // Output: 2 (Buy on day 1 and sell on day 2)
console.log(maxProfit2([1, 2])); // Output: 1 (Buy on day 1 and sell on day 2)

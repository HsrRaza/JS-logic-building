// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input:prices = [7, 1, 5, 3, 6, 4]
// Output:5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

function maxProfit(prices) {
    let buy_price = prices[0]
    
    let profit = 0;

    for(let i =  1; i< prices.length; i++){
        if(prices[i] < buy_price){
            buy_price = prices[i];
        } else {
            let current_price = prices[i] - buy_price;
            profit = Math.max(current_price, profit)
        }
    }

    return profit


}

console.log(maxProfit([7,1,5,3,6,4]));

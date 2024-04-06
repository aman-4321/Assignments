/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store the total spent by category
  let totalSpentByCategory = {};

  // Iterate over each transaction
  for (let transaction of transactions) {
    // If the category is not yet in the object, add it with the price of the current transaction
    if (!totalSpentByCategory[transaction.category]) {
      totalSpentByCategory[transaction.category] = transaction.price;
    } else {
      // If the category is already in the object, add the price of the current transaction to the existing total
      totalSpentByCategory[transaction.category] += transaction.price;
    }
  }

  // Convert the object to an array of objects, each with a category and totalSpent property
  return Object.entries(totalSpentByCategory).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;

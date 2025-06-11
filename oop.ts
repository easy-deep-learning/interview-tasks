/**
### Task: Process Orders Summary

Description:

You're given an array of customer orders. Each order is an object like this:
*/
type OrderData = "TODO";
interface IOrderClass = "TODO";

const ordersData: OrderData[] = [
  {
    id: 101,
    customer: "Alice",
    items: [
      { name: "Book", quantity: 1, price: 15.99 },
      { name: "Pen", quantity: 2, price: 3.5 },
    ],
  },
  {
    id: 102,
    customer: "Bob",
    items: [{ name: "Notebook", quantity: 3, price: 7.25 }],
  },
];

class OrderClass implements IOrderClass {
  // TODO
}

const currentOrders = new OrderClass(ordersData);

const result = currentOrders.summarizeOrders();

/**
 * Write a class for processing orders.
 * The class should implement the following:
 * - A constructor that accepts an array of orders
 * - A method `summarizeOrders()` that returns an array of strings.
 *   - String example: "Order #123 for Alice: 3 items, total $59.97"
 *   - 3 items is the total quantity (sum of all quantity fields)
 *   - $59.97 is the total cost (sum of quantity * price for all items)
 *   - Amounts should be rounded to 2 decimal places
 * 
const referenceResult = [
  "Order #101 for Alice: 3 items, total $22.99",
  "Order #102 for Bob: 3 items, total $21.75",
];

 * 
 * 
 * - The class should handle any errors gracefully, such as invalid order data
 */

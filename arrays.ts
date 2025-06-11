/**
### Task: Process Orders Summary

Description:

You're given an array of customer orders. Each order is an object like this:
*/

type Order = {
  id: number;
  customer: string;
  items: { name: string; quantity: number; price: number }[];
};

const orders: Order[] = [
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

/**
 * Write a function `summarizeOrders(orders: Order[]): string[]` that returns an array of strings.
 *
 * String example: "Order #123 for Alice: 3 items, total $59.97"
 *
 * - 3 items is the total quantity (sum of all quantity fields)
 * - $59.97 is the total cost (sum of quantity * price for all items)
 * - Amounts should be rounded to 2 decimal places
 */

const summarizeOrders = "TODO";

const referenceResult = [
  "Order #101 for Alice: 3 items, total $22.99",
  "Order #102 for Bob: 3 items, total $21.75",
];

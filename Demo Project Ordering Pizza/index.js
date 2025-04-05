const menu = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "BBQ Chicken", price: 14 },
    { name: "Meat Lover's", price: 16 },
    { name: "Veggie", price: 13 }
];

const cashInRegister = 100;
const nextOrderId = 1; // This will be used to assign unique IDs to orders
const orderQueue = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
};

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return order;
};

addNewPizza({ name: "Hawaiian", price: 15 });
addNewPizza({ name: "Spicy Tuna", price: 18 });
addNewPizza({ name: "Four Cheese", price: 20 });

placeOrder("BBQ Chicken");
completeOrder("1");

console.log("Cash in register: ", cashInRegister);
console.log("Order Queue: ",orderQueue);
console.log("Menu: ", menu);


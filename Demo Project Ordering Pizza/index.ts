//TypeScript = Defensive Coding

/**
 * Challenge: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */
type Pizza = {
    id: number
    name: string
    price: number
}

/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */

/**
 * Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number;
    pizza: Pizza;
    status: "ordered" | "completed";
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 10 },
    { id: 2, name: "Pepperoni", price: 12 },
    { id: 3, name: "BBQ Chicken", price: 14 },
    { id: 4, name: "Meat Lover's", price: 16 },
    { id: 5, name: "Veggie", price: 13 }
];

let cashInRegister = 100;
let nextOrderId = 1; // This will be used to assign unique IDs to orders
const orderHistory: Order[] = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

/**
 * Challenge: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */

function addNewPizza(pizzaObj: Pizza) {
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

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        throw new Error(`Pizza "${pizzaName}" not found in menu`);
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
};

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

/**
 * Challenge: Fix the warning below by handling the "sad path" scenario!
 */

export function completeOrder(orderId: number) {
    const order = orderHistory.find(order => order.id === orderId);
    if (!order) {
        throw new Error(`Order with ID ${orderId} not found`);
    }
    order.status = "completed";
    return order;
};

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

function getPizzaDetail(identifier: string | number) {
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */
    if(typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else {
        return menu.find(pizza => pizza.id === identifier);
    }
}

addNewPizza({ id: 5, name: "Hawaiian", price: 15 });
addNewPizza({ id: 6, name: "Spicy Tuna", price: 18 });
addNewPizza({ id: 7, name: "Four Cheese", price: 20 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Cash in register: ", cashInRegister);
console.log("Order Queue: ",orderHistory);
console.log("Menu: ", menu);

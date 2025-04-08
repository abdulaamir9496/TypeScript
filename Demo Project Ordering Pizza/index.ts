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

let cashInRegister = 100;
let nextOrderId = 1; // This will be used to assign unique IDs to orders
let nextPizzaId = 1; // This will be used to assign unique IDs to pizzas

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 10 },
    { id: nextPizzaId++, name: "Pepperoni", price: 12 },
    { id: nextPizzaId++, name: "BBQ Chicken", price: 14 },
    { id: nextPizzaId++, name: "Meat Lover's", price: 16 },
    { id: nextPizzaId++, name: "Veggie", price: 13 }
];

const orderHistory: Order[] = [];
/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter
 * Return the new pizza object (with the id added) from the function.
 */

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

/**
 * Challenge: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza  {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    // pizzaObj.id = nextPizzaId++; // Assign a unique ID to the new pizza (no need of this code snippet after user Omit<>)
    menu.push(newPizza)
    return newPizza;
}

/**
 * Challenge part 1.5: Try to move the logic for adding an ID to the pizza objects 
 * inside the addNewPizza function, so that we can call addNewPizza with no id, and
 * the function will handle that part for us.
 * 
 * NOTE: you will run into TS warnings that we'll address soon, but the code should
 * still run.
 */

/**
 * Challenge part 1: Make it so we can use a global variable to track the nextPizzaId
 * and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 * Update the menu items to use this as well so we don't have to manually enter ids 1-4
 * like we're currently doing
 */

/**
 * Challenge: add explicit return types to the rest of our functions
 */

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName: string): Order | undefined {
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

/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

/**
 * Mini-challenge: what should be passed in as the generic type on line 53?
 */

// example usage:
addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderHistory, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu);
console.log(orderHistory);

export function completeOrder(orderId: number): Order | undefined {
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

/**
 * Challenge (part 2): explicitly type the return value of this function
 * to tell TypeScript it could either be a Pizza object or undefined
 * as the return value.
 */

function getPizzaDetail(identifier: string | number): Pizza | undefined {
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */
    if(typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new Error("Parameter `identifier` must be a string or a number");
    }
}

addNewPizza({ name: "Hawaiian", price: 15 });
addNewPizza({ name: "Spicy Tuna", price: 18 });
addNewPizza({ name: "Four Cheese", price: 20 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order Queue: ",orderHistory);

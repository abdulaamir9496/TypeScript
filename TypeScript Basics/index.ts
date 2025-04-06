// let userName = "Bob";

// userName = 5; // Error: Type 'number' is not assignable to type 'string'.
// userName = true; // Error: Type 'boolean' is not assignable to type 'string'.
// userName = null; // Error: Type 'null' is not assignable to type 'string'.
// userName = undefined; // Error: Type 'undefined' is not assignable to type 'string'.
// userName = {}; // Error: Type '{}' is not assignable to type 'string'.
// userName = []; // Error: Type 'never[]' is not assignable to type 'string'.
// userName = Symbol(); // Error: Type 'symbol' is not assignable to type 'string'.
// userName = BigInt(123); // Error: Type 'bigint' is not assignable to type 'string'.
// userName = () => {}; // Error: Type '() => void' is not assignable to type 'string'.
// userName = new Date(); // Error: Type 'Date' is not assignable to type 'string'.
// userName = new Map(); // Error: Type 'Map<unknown, unknown>' is not assignable to type 'string'.
// userName = new Set(); // Error: Type 'Set<unknown>' is not assignable to type 'string'.
// userName = new WeakMap(); // Error: Type 'WeakMap<unknown, unknown>' is not assignable to type 'string'.
// userName = new WeakSet(); // Error: Type 'WeakSet<unknown>' is not assignable to type 'string'.

// let userName: string = "Bob";

// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

// let numberOfWheels: number = 4
// let isStudent: boolean = false

//Making custom types
// type Food = string

// let favoriteFood: Food = "Pizza";

//TOPIC: Nested Object types & optional properties
// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor
//We can use this below separate type definition to create a custom type for the address object
// type Address = {
//     street: string,
//     city: string,
//     state: string,
//     zipCode: number
// }
// //create custom types of objects
// type Person= {
//     name: string
//     age: number
//     isStudent: boolean
//     favoriteFood: string
//     hobbies: string[]
//     address?: Address
// }

// let person = {
//     name: "Bob",
//     age: 30,
//     isStudent: false,
//     favoriteFood: "Pizza",
//     hobbies: ["reading", "gaming"],
//     // address: {
//     //     street: "123 Main St",
//     //     city: "New York",
//     //     state: "NY",
//     //     zipCode: 10001,
//     // },
// }

// let person2 = {
//     name: "Alice",
//     age: 25,
//     isStudent: true,
//     favoriteFood: "Sushi",
//     hobbies: ["cooking", "traveling"],
//     address: {
//         street: "456 Elm St",
//         city: "Los Angeles",
//         state: "CA",
//         zipCode: 90001,
//     },
// }

// function displayPersonInfo(person: Person) {
//     console.log(`${person.name} lives at ${person.address?.street || 'unknown address'}`);
// }

// displayPersonInfo(person2);

//TOPIC: typing arrays:
// let ages: number[] = [25, 30, 35, 40, 45];
// ages.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// ages.push("hello"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ages.push(null); // Error: Argument of type 'null' is not assignable to parameter of type 'number'.
// ages.push(undefined); // Error: Argument of type 'undefined' is not assignable to parameter of type 'number'.
// ages.push({}); // Error: Argument of type '{}' is not assignable to parameter of type 'number'.
// ages.push([]); // Error: Argument of type 'never[]' is not assignable to parameter of type 'number'.
// ages.push(Symbol()); // Error: Argument of type 'symbol' is not assignable to parameter of type 'number'.

//we can also use the below syntax to define an array of numbers, which is equivalent to the above syntax
// let ages2 = [27, 32, 37, 42, 47];

// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
// }

// let person1: Person = {
//     name: "Bob",
//     age: 30,
//     isStudent: false,
// }

// let person2: Person = {
//     name: "Alice",
//     age: 25,
//     isStudent: true,
// }

// /**
//  * Challenge: create an array of people objects and
//  * manually type it as an array of Person types
//  */

// let people: Person[] = [person1, person2];

//TOPIC: Literal types
// let myName = "Bob";
// myName = "Alice"; // Error: Type '"Alice"' is not assignable to type '"Bob"'.
// myName = 5; // Error: Type 'number' is not assignable to type '"Bob"'.
// myName = true; // Error: Type 'boolean' is not assignable to type '"Bob"'.
// myName = null; // Error: Type 'null' is not assignable to type '"Bob"'.
// myName = undefined; // Error: Type 'undefined' is not assignable to type '"Bob"'.
// myName = {}; // Error: Type '{}' is not assignable to type '"Bob"'.
// myName = []; // Error: Type 'never[]' is not assignable to type '"Bob"'.
// myName = Symbol(); // Error: Type 'symbol' is not assignable to type '"Bob"'.

// let myName: "Bob" = "Bob"; // Correctly typed as "Bob"
// myName = "Alice"; // Error: Type '"Alice"' is not assignable to type '"Bob"'.

// const myName2 = "Bob";
// myName2 = "Alice"; // Error: Cannot assign to 'myName2' because it is a constant or a read-only property.
// myName2 = 5; // Error: Type 'number' is not assignable to type '"Bob"'.
// myName2 = true; // Error: Type 'boolean' is not assignable to type '"Bob"'.
// myName2 = null; // Error: Type 'null' is not assignable to type '"Bob"'.
// myName2 = undefined; // Error: Type 'undefined' is not assignable to type '"
// myName2 = {}; // Error: Type '{}' is not assignable to type '"Bob"'.
// myName2 = []; // Error: Type 'never[]' is not assignable to type '"Bob"'.
// myName2 = Symbol(); // Error: Type 'symbol' is not assignable to type '"Bob"'.

// const myName2: "Bob" = "Bob"; // Correctly typed as "Bob"
// myName2 = "Alice"; // Error: Type '"Alice"' is not assignable to type '"Bob"'.
// myName2 = "Bobby"; //Type '"Bobby"' is not assignable to type '"Bob"'.ts(2322)

//TOPIC: Unions  (using combinations of types)
//Ex: let userName: string | number = "Bob";
//Ex: let userRole = "admin" as "admin" | "user" | "guest"; // Correctly typed as "admin" | "user" | "guest"

// type User = {
//     username: string
//     password: string
//     email: string
//     age: number
//     isAdmin: boolean
//     role: "admin" | "user" | "guest"
//     address?: {
//         street: string
//         city: string
//         state: string
//         zipCode: number
//     }
// }

// type UserRole = "guest" | "user" | "admin";

// let userRole: UserRole = "admin"; // Correctly typed as "admin" | "user" | "guest"

//TOPIC: Function return type
type UserRole= "guest" | "user" | "admin";

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "Bob", role: "admin" },
    { username: "Alice", role: "user" },
    { username: "Charlie", role: "guest" }
];

function fetchUserRole(username: string): User {
    const user = users.find(user => user.username === username);
    if(!user) {
        throw new Error(`User with username ${username} not found`);
    }
        return user;
}


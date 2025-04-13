//TOPIC: TypeScript first program
// var typeScript = "I am learning TypeScript";
// console.log(typeScript);

//TOPIC: Variables
// var userName = "Aamir";
// document.write(userName);

//TOPIC: Data Types
// Number DataType is used for any number like:
// Decimal
// Double
// Hexadecimal
// Octal
// Binary
//For Example:
// var myNumber : number = 1.01;
// console.log(myNumber);

// var num_one = 100;
// console.log(num_one);

//TOPIC: String DataType
// We define string in 3 ways: 
// 1. Single Quotes 'String Values';
// 2. Double Quotes "String Values";
// 3. Backticks `String Values`;

//For Example: 
// var myString : string = 'PerfAI.ai';
// var myString : string = "PerfAI.ai";
// var myString : string = `PerfAI.ai`;
// console.log(myString);
//document.write(myString);

//TOPIC: Boolean DataType
// Boolean DataType is a TRUE/ FALSE values
// For Example: 
// var myBoolean : boolean = true;
// var myBoolean : boolean = false;
// console.log(myBoolean);

//TOPIC: Array DataType
// Array is collection of values
// Array can hold more then one value
// There are two type of array declaration in typescript string or number
// For Example: 
// var myArray : Array<number> = [values];
// var myArray : Array<string> = [values];

// var myArray : Array<string> = ["Node.js", "Express.js", "MongoDB", "React"];
// for(var i : number = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     document.write(myArray[i]);
// }

// var myArray : Array<number> = [1, 2, 3, 4, 5];
// for(var i : number = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     document.write(String(myArray[i]));
// }

//TOPIC: hetrogenius elements in array
/**
 * Heterogeneous elements mean JSON Array
 * JSON stands for JavaScript Object Notation
 * JSON used to transfer the data over the network
 * It's light weight and text base standard
 * Parsing (Reading) of json is easy
 * Object: {}
 * Array: []
 * Data: Key value Pairs
 */

// var myArray : Array<any> = [
//     {
//         "ProductID" : "01" + "<br/>",
//         "ProductName" : "Apple Ipad" + "<br/>",
//         "ProductCost" : "100000"
//     },
//     {
//         "ProductID" : "02" + "<br/>",
//         "ProductName" : "Apple Iphone" + "<br/>",
//         "ProductCost" : "90000"
//     },
//     {
//         "ProductID" : "03" + "<br/>",
//         "ProductName" : "Apple Imac" + "<br/>",
//         "ProductCost" : "120000"
//     },
// ];

// for(var i : number = 0; i < myArray.length; i++) {
//     var obj : any = myArray[i];
//     document.write(
//         obj.ProductID,
//         obj.ProductName,
//         obj.ProductCost + "<br/> <br/>"
//     );
// }

//TOPIC: 12 any datatype
// any is a super type of all types in TypeScript
// any is a type of type that can hold any type of data
//Any datatype is used when we don't known the return value of the variable.
// For Example: 
// var myVariable : any = { name : "Rahul", age : 25, city : "Mumbai", isIndian : true, occupation : "Software Engineer" };
// console.log(myVariable);

// var var_name : any = { "name" : "Aamir", "YouTubeChannel" : "Aamir's Dev Journey"};
// document.write(var_name);  // [Object Object]

// var var_name : any = { "studentName" : "Aamir", "YouTubeChannel" : "Aamir's Dev Journey"};
// // document.write(var_name.studentName + "<br/>" + var_name.YouTubeChannel);  //Aamir \n Aamir's Dev Journey
// document.write(`${var_name.studentName} <br/> ${var_name.YouTubeChannel}`);  //Aamir \n Aamir's Dev Journey

//TOPIC: 13 global polluting issue
/**
 * If any block code effecting the global member it is called as global polluting issue
 * Global polluting issue raised because of "va" keywork
 * We will overcome this problem with "let" keyword
 * "let" is the keyword introduced in ES-05
 */

// var globalVariable : string = "Global Variable using var key word";
// console.log(`${globalVariable}`);

// var myVariable : number = 10;

// if(true) {
//     var myVariable : number = 20;
//     console.log(`Inside if block with updated var variable: ${myVariable}`);  //20
// }

// console.log(`Outside if block without updated var variable: ${myVariable}`);  //20

// var globalVariable : string = "Global Variable using let key word";
// console.log(`${globalVariable}`);

// let myLetVariable : number = 10;

// if(true) {
//     let myLetVariable : number = 20;
//     console.log(`Inside if block with updated let variable: ${myLetVariable}`);  //20
// }

// console.log(`Outside if block without updated let variable: ${myLetVariable}`);  //20


//TOPIC: TypeScript named Function example 1
/**
 * Here we learn 2 types of functions: 
 * 1. Named Functions
 * 2. Arrow Function/ Anonymous Function
 * 
 * A function with a name called as named function.
 * A function without name is called as Arrow function or Anonymous function.
 * Function is used to perform a specific task.
 * Function is used to create the business logic.
 * It is also used to reduce the code redundancy (duplication)
 */

// function myStringFunction() : string {
//     return "Hello from named function";
// }
// console.log(myStringFunction());

//TOPIC: TypeScript named Function example 2
/**
 * Create the following named function with three arguments
 * @fun_one
 * Arguments are string datatype
 * Return type of function is void
 * Call the function
 */

// function func_one(ID : number, Name : string, Designation : string) : void {
//     document.write(ID + "<br>" + Name + "<br>" + Designation);
// }

// func_one(1, "Aamir", "Software Engineer" + "<br/>");
// func_one(2, "Salman", "DataScientist" + "<br/>");
// func_one(3, "Sohail", "DevOps Engineer");

//TOPIC: Arrow function / Anonymous function
/**
 * The function without name is called as arrow function.
 * Arrow function are more secured compared to named function.
 * Arrow function are more faster compared to named function.
 * Arrow function are more memory efficient compared to named function.
 * Arrow function are more readable compared to named function.
 * Arrow function represented by "=>" (fat arrow) symbol.
 */

// Arrow function syntax: 
// Syntax: 
// var var_name = (arguments with datatype) : return type => {
//     //business logic
// }

//call the function
// var_name();

/**
 * Arrow function example(1)
 * Create the arrow function with following name @arrowFunc1
 * Arrow function return following message "Node Js tutorials coming soon!!"
 * Call the arrow function
 */

// var arrowFunc1 = () : string => {
//     return `I am Learning MongoDB, Node.Js and Express.Js`;
// }
// console.log(arrowFunc1());

/**
 * Arrow function example(2)
 * Create the arrow function with the following variable name @var_One
 * Arrow function have string arguments
 * Return type of arrow function is void
 * Call the arrow function with the following values
 * @angular7
 * @NodeJS
 * @Mongo_DB
 */

// var var_One = (arg1 : string, arg2 : string, arg3 : string) : void => {
//     console.log(`I am Learning ${arg1}, ${arg2} and ${arg3}`);
// }
// var_One("Angular7", "NodeJS", "Mongo_DB");

// var arrowFunc2 = (name : string, jobTitle : string) => {
//     return `Hello ${name} you are a ${jobTitle}`;
// }
// console.log(arrowFunc2("Aamir", "Software Engineer"));

// More practising examples using types: number | string | boolean:
// var topic = `Using types: numbers | string | boolean`;
// console.log(topic);

// var arrowFunc2 = (jobID : number, name : string, jobTitle : string, isSelected : boolean) : number | string | boolean => {
//     return `Hi ${name} you are job ID is ${jobID} and you are selected for job role as a ${jobTitle} and it's ${isSelected}`;
// }
// console.log(arrowFunc2(123, "Aamir", "Software Engineer", true));

// // More practising examples 2 using any type:
// var topic = `Using types: any`;
// console.log(topic);

// var arrowFunc3 = (jobID : number, name : string, jobTitle : string, isSelected : boolean) : any => 
// {
//     return `Hi ${name} you are job ID is ${jobID} and you are selected for job role as a ${jobTitle} and it's ${isSelected}`;
// }
// console.log(arrowFunc3(123, "Aamir", "Software Engineer", true));

//TOPIC: Class
/**
 * Collection of variables and function called as Class
 * We can create class by using class keyword
 * The recommended modifier for variable is private
 * The recommended modifer for function is public
 * We can create object to the classes by using "new" keyword
 * We can define constructor by using "constructor" keyword
 */

/**
 * Class example
 * Create the following class @Class_one
 * Class containing following private variables @sub_one @sub_two @sub_three
 * Initialize the above variables by using constructor using following values @Angular7 @NodeJS @MongoDB
 */

// class Class_one {
//     private sub_one : string;
//     private sub_two : string;
//     private sub_three : string;

//     constructor() {
//         this.sub_one = "Angular7";
//         this.sub_two = "NodeJS";
//         this.sub_three = "MongoDB";
//     }

//     public getSubOne() : string {
//         return this.sub_one;
//     }

//     public getSubTwo() : string {
//         return this.sub_two;
//     }

//     public getSubThree() : string {
//         return this.sub_three;
//     }
// }

// let obj : Class_one = new Class_one;

// console.log(obj.getSubOne());
// console.log(obj.getSubTwo());
// console.log(obj.getSubThree());


//TOPIC: Parametrized constructor
/**
 * Create the following class @Class_one
 * Class containing following private variables @sub_one @sub_two @sub_three
 * Initialize the above variables by using parameterized constructor using following values @Angular7 @NodeJS @MongoDB
 */

// class Class_one {
//   // Declare private variables
//     private sub_one : string;
//     private sub_two : string;
//     private sub_three : string;

//     //Parameterized constructor
//     constructor(sub_one : string, sub_two : string, sub_three : string) {
//         this.sub_one = sub_one;
//         this.sub_two = sub_two;
//         this.sub_three = sub_three;
//     }

//     // Method to display values
//     public displaySubjects() : void {
//         console.log(`Subject One: ${this.sub_one}`);
//         console.log(`Subject Two: ${this.sub_two}`);
//         console.log(`Subject Three: ${this.sub_three}`);
//     }
// }

// // Create an object with Angular7, NodeJS, MongoDB
// const obj = new Class_one("Angular7", "NodeJS", "MongoDB");
// obj.displaySubjects();

//TOPIC: Inheritance
/**
 * TypeScript supports class inheritance
 * Inheritance is the ability of a program to create new classes from an existing class.
 * A class inherits from another class by using the extend keyword.
 */

// class Class_one {
    //creating a function
//     public func_one() : string {
//         return `I am from class one`;
//     }
// }

// class Class_two extends Class_one {
//     public func_two() : string {
//         return `I am from class two`;
//     }
// }

// class Class_three extends Class_one {
//     public func_three() : string {
//         return `I am from class three`;
//     }
// }

// const obj : Class_two = new Class_two();
// document.write(obj.func_one() + "<br />" + obj.func_two());

//TOPIC: Multilevel Inheritance
/**
 * Multiple inheritance not supported by typescript
 * function overloading also not supported by typescript
 */

// class Class_one {
//     public func_one() : string {
//         return `This is Parent class_one of all other multilevel child classes`;
//     }
// }

// // const obj : Class_one = new Class_one();
// // document.write(obj.func_one());
// // console.log(obj.func_one());

// class Class_two extends Class_one {
//     public func_two() : string {
//         return `This is child class_two of his above multilevel parent class func_one`;
//     }
// }

// // const obj1 : Class_two = new Class_two();
// // document.write(obj1.func_one() + "<br />" + obj1.func_two());
// // console.log(obj1.func_one() + "<br />" + obj1.func_two());

// class Class_three extends Class_two {
//     public func_three() {
//         return `This is child class_three of his above multilevel parent class func_two`;
//     }
// }

// const obj2 : Class_three = new Class_three();
// document.write(obj2.func_one() + "<br/>" + obj2.func_two() + "<br />" + obj2.func_three());
// console.log(obj2.func_one() + "<br/>" + obj2.func_two() + "<br />" + obj2.func_three());

//TOPIC: Static keyword
/**
 * Static member we can access through class name directly
 * We can initialize static member with help of constructor
 * We can't access static members through class references
 * For static members memory will be initialize in Heap Memory
 */

// class Class_one {
//     static myVar : string = `I have created variable using static keyword`;

//     static myFunc () : string {
//         return `I have created function using static keyword`;
//     }
// }

// //without creating obj we can access static variable and static function directly as shown below.
// document.write(Class_one.myVar + "<br />" + Class_one.myFunc());
// console.log(Class_one.myVar + "<br />" + Class_one.myFunc());


//TOPIC: template String in Typescript
/**
 * used for string concatination of two or more elements.
 * It's used backtik `` for concatination.
 */


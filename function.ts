/**
 * opational parameter
 */

function printUser(name: string, id?: number): string {
  return id ? `hi ${name} and your user-id is ${id}` : `hi ${name}`;
}
let user1 = printUser("k_s", 12);
let user2 = printUser("k_k");

console.log(user1);
console.log(user2);

/**
 * require parameter
 * here id is require parameter
 */

function consoleUser(name: string, id = 1) {
  return `hi ${name} your user id is ${id}`;
}
let user3 = consoleUser("shanu", 3);
console.log(user3);

/**
 * type inference
 */
function getEmploye<T>(id: T, age: T): T {
  return id;
}
console.log(getEmploye("2", "12"));
console.log(getEmploye(3, 13));

// Generic function to add two numbers or concatenate two strings
function addOrConcat<T>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    // If both inputs are numbers, perform addition
    return (a + b) as T; //type assertion to tell the compiler that you know what you're doing
  } else if (typeof a === "string" && typeof b === "string") {
    // If both inputs are strings, concatenate them
    return (a + b) as T; // type assertion to tell the compiler that you know what you're doing
  } else {
    // Throw an error for unsupported types
    throw new Error("Unsupported types. Inputs must be numbers or strings.");
  }
}

// Examples
let sum: number = addOrConcat(5, 10); // Result: 15
console.log(sum);
let concatenatedString: string = addOrConcat("Hello, ", "World!"); // Result: Hello, World!
console.log(concatenatedString);
// console.log(addOrConcat(true, false));

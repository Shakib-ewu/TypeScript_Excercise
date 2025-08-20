const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); // Outputs "Alice"
console.log(person.age);  // Outputs 25
person.greet();           // Outputs "Hello, my name is Alice"

let num = Number(prompt("Enter any number:"));
let message = "You entered: " + num + "\n";

if (num > 0) {
    message += "Positive ";
} else if (num < 0) {
    message += "Negative ";
} else {
    message += "Zero ";
}

if (num !== 0 && num % 2 === 0) {
    message += "even number";
} else if (num !== 0) {
    message += "odd number";
} else {
    message += "number";
}

alert(message);

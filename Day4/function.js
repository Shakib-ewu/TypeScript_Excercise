let add =(x,y) => {
   return x + y;
}
console.log(add(20, 10));


function process(x, y, callback) {
    return callback(x, y);
}

function multiply(a, b) {
    return a * b;
}

console.log(process(5, 3, multiply)); // Outputs 15


function greetUser(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greetUser("Sakib", sayGoodbye);



console.log("Hello, TypeScript!");
// shift+alt+A  all comments
//let- use let when you want to change the value of a variable
// const- use const when you want to keep the value of a variable constant
//var -we don't use var anymore, it has a lot of issues

//functional scope vs block scope
let message: string = "Welcome to TypeScript!";
function greet() {
    let name: string = "Alice";
    console.log(`${message} Hello, ${name}!`);
}
greet();

// Example: Functional scope vs Block scope

function functionalScopeExample() {
    if (true) {
        var functionScoped = "I am function scoped (var)";
        let blockScoped = "I am block scoped (let)";
        const blockScopedConst = "I am block scoped (const)";
        console.log(blockScoped); // Accessible here
        console.log(blockScopedConst); // Accessible here
    }
    console.log(functionScoped); // Accessible here (function scope)
    // console.log(blockScoped); // Error: blockScoped is not defined
    // console.log(blockScopedConst); // Error: blockScopedConst is not defined
}

functionalScopeExample();


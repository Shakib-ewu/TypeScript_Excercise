//Strings are written inside double or single quotes. Numbers are written without quotes.
let newMessage = "Hello"
let count = 30

newMessage = "100";
console.log(newMessage);

x = 5;
x = 7;
x = x + x;
alert(x); // This will show 14

const car: { type: string; model: string; color: string; owner?: string } = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
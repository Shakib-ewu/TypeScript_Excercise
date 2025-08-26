const N = 10; // Change this value as needed
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log(`Sum of 1 to ${N} is:`, sum);

// Example of infinite loop (will run forever, so use with caution)
/*while (true) {
    console.log("This is an infinite loop!");
    // break; // Uncomment this line to stop the loop
}*/

let i = 1;
while (i <= 20) {
    sum += i;
    i++;
}
console.log(`Sum of 1 to ${N} using while loop is:`, sum);

//print all even number from 1 to 100
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum1 += i;
    }
   
}
 console.log("End of iteration:", sum1);

 //create a game where you start with any random number.Ask the user to keep guessing the game number until the user enters correct value.

 let gamenumber=40;
    let usernumber=Number(prompt("Enter any number :"));
    while (usernumber !== gamenumber) {
        usernumber = Number(prompt("Wrong guess! Try again:"));
    }
    console.log("Congratulations! You've guessed the right number.");

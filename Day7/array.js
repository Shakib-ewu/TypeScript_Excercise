const sampleArray = [1, 2, 3, 4, 5];

const stringArray = ["apple", "banana", "cherry", "date","elderberry"];
console.log(stringArray);
console.log(stringArray.toString());
console.log(stringArray[3]);
console.log(stringArray.length);

//last item of array
console.log(stringArray[stringArray.length - 1]);

// Get last index of the array
console.log("Last index:", stringArray.length - 1);
console.log(stringArray.join("* "));

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Sum:", sum);

// Find max number in array

let max= numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Max:", max);

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}



const num = [1, 2, 3, 4, 5, 100, 200];
let value = 101;
let position = -1;

for (let i = 0; i < num.length; i++) {
    if (num[i] === value) {
        position = i + 1;
        break;
    }
}
if (position === -1) {
    console.log("Value not found in the array.");
}
else {
    console.log("Index of 101:", position);
}
function lxp() {
  console.log("Hello from lxp!");
}
lxp();


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(68)); // This will print 20

function tf(name,age,dob){
    console.log('Name: '+name+' Age: ' +age+ ' Date of Birth: '+ dob);
}

tf("John Doe", 30, "1993-01-01");

document.getElementById("btn").addEventListener('click', function() {
    tf("John Doe", 30, "1993-01-01");
});

let math= function(x,y) {
   return x + y;
}

console.log(math(5, 10));

let add =(x,y) => {
   return x + y;
}
console.log(add(5, 10));

function process(x, y, callback) {
    return callback(x, y);
}

function multiply(a, b) {
    return a * b;
}

console.log(process(5, 3, multiply)); // Outputs 15
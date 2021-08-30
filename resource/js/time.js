var today = new Date();
var hourNow = today.getHours();
var greeting;

console.log(hourNow);

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome to my website!';
}

document.write('<h2>' + greeting + '</h2>');
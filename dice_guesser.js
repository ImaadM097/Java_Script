let num = Math.floor(Math.random()*7+1);
const input = prompt("Please enter a number from 1 to 6");
const inputNum = parseInt(input);
if(num === inputNum) {
    console.log('You guessed right');
}
else {
    console.log('You guessed wrong');
}

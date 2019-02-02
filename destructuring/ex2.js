let array = [
    "blue",
    "green",
    "red",
    "pink",
    "orange",
    "yellow"
] 
// Using destructuring, and in one line of code, 
//  create 3 variables that extract blue, green, and pink

YOUR_CODE_HERE

let[blue2, green2, ,pink3] = array;

// Ron's answer

let [varBlue, varGreen,,varPink] = array;
let [blue, green,,pink] = array;  // is that correct?


// Jeff's code
let [blue, green, , pink] = array;







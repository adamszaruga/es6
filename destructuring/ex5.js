let object = {
    id: "1223",
    name: "To Kill a Mockingbird"
}


// The destructuring assignment below is attempting to extract "author", but that key doesn't exist!
//   Fix this line of code by providing a fallback value for "author"

let { author } = object;


//Jeff's code
let { author = "Jeff Hargis"} = object;


//Pamela
let { author = "Harper Lee"} = object;


// Ron

let { author = "Ron Cagle" } = object;
// Let's say we need to coalesce these variables into one object:
let id = "1234";
let firstName = "Sue";
let lastName = "Geller";
let email = "sg@suegeller.com";


// This is how we would do it with ES5 Javascript:
var obj = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email
}

// ^^^ Notice how redundant that was! ES6 gives us a short cut:
let obj2 = { id, firstName, lastName, email, password };

// ^^^ We're still creating an object literal with { }. 
// The keys of this new object are the variable names themselves
// The values of the object are the values of those variables

// You're still free to add normal key/value pairs, too:
let obj3 = {
    id,
    firstName,
    preferredEmail: email,
    nickname: "Charlie"
}

// But wait, there's more! If your object has a key that points to a function, 
//   you can define your function inline, like so:

var obj3 = {
    name: "Adam",
    shout: function() {
        
    }
}

let obj3 = {
    name: "Adam",
    shout() {
        return "AAAHHHHHH!!!"
    }
}

obj3.shout();

// You can also dynamically add keys to object literals:
let keyToWrite = "key2";

let obj4 = {
    ["hello" + i]: "hi"
}
obj4.hello1 === "hi";

let obj5 = {
    keyToWrite: "hi"
}
obj5.keyToWrite === "hi"

var




var array = ["name", "age", "occupation"];

for (let i=0; i<array.length; i++){
    let currentField = array[i];

    let payload = {
        [currentField]: "somevalue"
    }

    axios.post('/data', payload);
}


















var object = {
    foo: "bar",
    foofoo: ["foo", "foo"],
    fun() {
        return "aslkjfads" + this.foo
    }
}

object.fun().length
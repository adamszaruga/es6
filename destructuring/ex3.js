let array = [
    {
        name: "Amanda",
        role: "Instructor"
    },
    {
        name: "Kamilah",
        role: "Student"
    }
]
// Using destructuring, and in one line of code, 
//  create 2 variables that extract the names of everyone in the array

YOUR_CODE_HERE

let [ {name:var1}, {name:var2} ] = array // thats cool

//Jordan is stealing jeffs idea
let [{ name: name1 }, { name: name2 }] = array  



// Jeff's code GO JEFF 

let [{ name: name1 }, { name: name2 }, { role: role1 }, { role: role2 }] = array;


// Ron's thinking too

let [name = "", name = ""] = array; // Would that work? 

// Adam is thinking
let [ { name: name1 }, { name: name2 } ] = array  


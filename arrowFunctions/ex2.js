// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the mahines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:
let justMachines = inventory.filter(i => i.type === "machine");
console.log(justMachines)

// Calculate the total value of the machines
let totalMachineValue = justMachines.reduce((acc, machine)=> acc + machine.value , 0);
console.log(totalMachineValue)






let justMachines = inventory.filter(index => index.type == "machine");

//Jordan 
const result = inventory.filter(item => item.type == "machine");
const total = result.reduce((acc, currentValue)=>acc + currentValue.value ,0);





// Ron's Code 
// Filter out things that arent machines:
let justMachines = inventory.filter(invArray => item.type == "machine") 
    console.log(justMachines);

// Q 2
// Calculate the total value of the machines
let totalMachineValue = 
console.log(totalMachineValue)    


// Calculate the total value of the machines
let totalMachineValue = YOUR_CODE_HERE
console.log(totalMachineValue)

// Jeff thanks Ron
let justMachines = inventory.filter(item => item.type == "machine");
let totalMachineValue =  justMachines.reduce((acc, machine) => acc + machine.value , 0);    
console.log(totalMachineValue)
console.log(justMachines)








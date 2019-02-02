// The function below uses plain old Promises. Rewrite it as an "async" method!

let getDogsOwnersBestFriend = () => {
    return get('/dog/1').then(dog => {
        return get(`/owner/${dog.owner}`);
    }).then( owner => {
        return get(`/friend/${owner.bestFriend}`);
    }).then( friend => {
        return friend.name;
    })
}

let getDogsOwnersBestFriend = async () => {
    let dog = await get('/dog/1')
    let owner = await get(`owner/${dog.owner}`);
    let ownersBestFriend = await get(`/friend/${owner.bestFriend}`);
    return ownersBestFriend.name        
}




//Jordan 

let getDogsOwnersBestFriend = async ()=>{
    let dog = await axios.get('/dog/1');
    let owner = await axios.get(`/owner/${dog.owner}`);
    let bf = await axios.get(`/friend/${owner.bestFriend}`);
    return bf.name; ////?????

    
                
}

// Jeff's code
let getDogsOwnersBestFriend = async () =>







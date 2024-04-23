// const score = 100;
// const scorevalue = 100.5;
// const name = "123";

// const temp = null;
// const value = true;

// let usermail;
// const id = Symbol("123")

// const object = 55;
// console.log(typeof id);

// +++++++++++++++++++++++++

// Stack (Primitive)  Heap (Non-Primitive)

let myyoutubename = "Somyadeep"

let anothername = myyoutubename
anothername = "Hatim"

console.log(anothername)

let userOne = {
    email: "mehtasomyadeep17@gmail.com",
    upi: "sdm@ybl"
}

let userTwo = userOne

userTwo.email = "sdmehta17@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
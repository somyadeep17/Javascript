// literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Somyadeep",
    age: 23,
    location: "lakhimpur",
    email: "mehtasomyadeep17@gmail.com",
    isLoggedin: false, 
    [mySym]: "aalokaparatha",
}

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])

jsUser.email = "ballumehta31@gmail.com"
// Object.freeze(jsUser)

console.log(jsUser)

jsUser.greetings = function(){
    console.log("Hello jsuser")
}
console.log(jsUser.greetings())

jsUser.greetingsTwo = function(){
    console.log(`Hello jsuser, ${this.name} and my email is ${this.email}`)
}
console.log(jsUser.greetingsTwo())

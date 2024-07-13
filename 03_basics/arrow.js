const user = {
    username: "somyadeep",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to username`)
        console.log(this)
    }
}

// user.welcomeMessage()

// function chai (){
//     let username = "somyadeep"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username = "somyadeep"
//     console.log(this.username)
// }
// chai()

//  const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log( addtwo(3,4))

const addtwo = (num1 , num2)  => num1 + num2
console.log(addtwo(5,8))
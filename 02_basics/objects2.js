// const tinderUser = new Object() singleton object
const tinderUser = {}

    tinderUser.id = "123abc"
    tinderUser.name = "Hatim"
    tinderUser.isLoggedin = false;

// console.log(tinderUser)

const regularUser = {
    email: "ballumehta31@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Somyadeep",
            lastname: "Mehta"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// // const obj3 = Object.assign(obj1,obj2)
// const obj3 = {...obj1,...obj2}

// console.log(obj3)



const course = {
    coursename: "js in hindi",
    price: "999",
    instructor: "somyadeep",
}

console.log(course.coursename)
const {price,instructor} = course
console.log(price,instructor)

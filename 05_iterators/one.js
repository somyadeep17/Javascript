
const myArray = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if(i%2 != 0)
        continue
    console.log(element)    
}
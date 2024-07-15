// Immediately invoked function Expressions (IIFE)  
function  chai (){
    console.log(`DB Connected`)
}
chai();

(function chaiorcode (){
    console.log(`DB Connected Two`);
}) ();

( () => {
    console.log('DB Connected Three')
} ) ();

// agar IIFE fuction mein parameter pass krna hai to 

( (name ) => {
    console.log( `DB connected ${name}`);
 } ) ('Somya deep')
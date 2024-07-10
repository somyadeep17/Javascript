const marvel_heros = ["Thor", "Ironman", "Thanos"]
const dc_heros = ["Flash", "Superman", "Batman"]

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)

const another_array = [1,2,3,[4,5],6,7,[6,7],4,5]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Somyadeep"))
console.log(Array.from("Somyadeep"))

const marvels_heros = ["ironman","thor","hulk","captainA"]
const dc_heros = ["superman","batman","flash"]

// marvels_heros.push(dc_heros)

// console.log(marvels_heros);
// console.log(marvels_heros[4][1]);

// const allHeros = marvels_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvels_heros,...dc_heros]
// console.log(all_new_heros);
const another_arr= [1,2,3 ,[4,5,6],7,[6,7,[4,5]]]
const real_onother_arr = another_arr.flat(Infinity)

console.log(real_onother_arr);


console.log(Array.isArray("joydeb"));
console.log(Array.from("joydeb"));
console.log(Array.from({name: "joydeb"}));



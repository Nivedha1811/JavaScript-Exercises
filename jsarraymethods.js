//to find length
const fruits=["mango","orange","papaya","kiwi"]
let fruitsValue =fruits.length
console.log(fruitsValue);

//to set length
const fruit=["mango","orange","papaya","kiwi"]
let fruitValue =fruit.length = 6
console.log(fruit)

//convert to a string
const family=["father","mother","sister","grandmother"]
let stringValue=family.toString()
console.log(stringValue);

// to position (-1)
const snacks=["bread","pizza","cake","juice","sweets"]
let atValue=snacks.at(-3)
console.log(atValue)

// to join elements
const veg=["tomoto","onion","beans","carrot"]
let vegValue=veg.join("|")
console.log("the vegies are:",vegValue);

// removes element from last
const dress=["skirt","pant","chudi","salwar"]
let dressValue=dress.pop()
console.log(dressValue);
console.log(dress);

//add element to last one or more
const dresses=["skirt","pant","chudi","salwar"]
let dressesValue=dresses.push("t-shirt","kurta")
console.log(dressesValue);
console.log(dresses);

//removes from first
const snack=["bread","pizza","milkshake","juice","chips"]
let snackValue=snack.shift()
console.log(snack);
console.log(snackValue)

//adds to first
const vegies=["tomoto","onion","beans","carrot"]
let vegiesValue=vegies.unshift("beetroot")
console.log(vegies);
console.log(vegiesValue);

//array or not
const arr =[1,34,76,89,43]
console.log(Array.isArray(arr))

const arr1="school"
let arriValue=Array.isArray(arr1)
console.log(arriValue);

//combine two or more arrays
const boys=["edwin","albert","nick","mickel"]
const girls=["roseline","sweety","ekim"]
const children=boys.concat(girls)
console.log(children);

//copy elements
const season=["spring","winter","rainy","sunny"]
const seasonValue=season.copyWithin(2,1)
console.log(seasonValue);

const season1=["spring","winter","rainy","sunny"]
const season1Value=season1.copyWithin(2,0,1)
console.log(season1Value);

//multiple array to single array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//
const num = [1, 2, 3, 4, 5, 6];
let numValue = num.flatMap(x=>
[x*2])

console.log(numValue);

// 1.Create an Object
const person = {
  firstName: "Mary",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;
console.log(firstName, lastName,`is ${person.age} years old.`);

// 2.object property alias
const dresses={
    gender:"Male",
    dress:"Tshirt",
    color:"red",
    size:"XL"
}

//destructing
let {dress:shirt}= dresses
console.log(`Jerry has:`,shirt);

//3.Array Destructing
const contry=["US","Europe","Netherland","Japan"]
let [contry1,contry2]=contry
console.log(`Jerry is located at:`,contry2);

//4.String Destructing
const name="Elizhabeth"
let [name1,name2,name3]=name
console.log(name1);

//5.using rest
const num=[1,2,3,4,5,6,7,8,9,10]
let[num1,num2,num3,...rest]=num
console.log(rest);

//6.Destructing Maps
const shopitems=new Map([
  ["Milk",500],
  ["Tomatos",40],
  ["Sugar",350],
  ["Milkshake",60],
  ["Cake",150]
])

let item=""
for(const[key, value]of shopitems){
  console.log(`The cost of ${key} is ${value}`);
}

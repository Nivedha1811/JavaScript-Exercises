// Spread operator in string
const name='ShadharVallabhaiPatel'
const nameValue=[...name]

console.log(nameValue);

// Spread operator in array
const fruitsName=['Mango','Pineapple','Kiwi']
const vegName=['Cabbage','Tomato','Peas']
const basket=[...fruitsName, ...vegName]

console.log(basket);

// Spread operator in object
const employeeName={
    firstname:'Amir',
    lastName:'Khan'
}
const employeeDetails={
    age:33,
    salary:'4.5 lpa',
    employeeId:97358
}
const employee={
    ...employeeName, ...employeeDetails,'designation':'Manager'
}

console.log(employee);

//rest operator
const arr1 = [1,2,3,4,5,6,7,8];
[a, b, c, ...rest] = arr1;

console.log(rest);

//using rest in function

function digits(...digits){
    console.log(digits);
    
}
digits(1,2,3,4,5,6,7)
//passing arguments to function spread and rest
function sum(...num){
    let total=0
    for(i=0;i<num.length;i++){
        total=total+num[i]
    }
    console.log(total);
}
num=[1,2,3,4,5,6,7,8,9,10,11,12]
sum(...num)
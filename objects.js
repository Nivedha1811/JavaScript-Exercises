//Creating Objects
const student1={
    name:"Raj",
    age:21,
    dept:"CSC"
}

const student2={
    name:"Preethi",
    age:22,
    dept:"BIO",
    subjects:{
        subject1:"english",
        subject2:"maths",
        subject3:"csc"
    }
}

//Accessing and Displaying Objects
const student1value=`${student1.name} is ${student1.age} years old`
console.log(student1value);

const student2value=`${student2.name} is ${student2.age} years old`
console.log(student2value);

//Modifying Properties
//Adding 
student1.fees=10000
const fees1Value=`Fees for ${student1.dept} is ${student1.fees}`
console.log(fees1Value);

student2.fees=15000
const fees2Value=`Fees for ${student2.dept} is ${student2.fees}`
console.log(fees2Value);

//Deleting 
student1.gender="male"
console.log(student1);

delete student1.gender
console.log(student1);

//Accessing nested objects
console.log(student2.subjects);
console.log(student2.subjects.subject1);
console.log(student2.subjects.subject2);
console.log(student2.subjects.subject3);

//Displaying objects by loop
const stuValue=Object.values(student1).forEach(value =>{
    console.log(value);
    
})
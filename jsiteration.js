
//foreach method
const num=[2,4,6,8,10]
const numValue = num.forEach(value => 
    console.log(value*2)
    )

const color=['blue','green','pink','black']
const colorValue=color.forEach(value=>{
    console.log(value)
})

const twomultiple=[1,2,3,4,5]
const twomultipleValue=twomultiple.forEach(value=>{
    console.log(value*2)
})

const name=['harini','praba','sruthi','priya','padma']
const nameValue=name.forEach(value=>{
    console.log('hello',value);
    
})

//map 
const numbers=[3,6,9,12,15,18]
const numberValue=numbers.map((value)=>{
    return value*value
})
 console.log(numberValue)

 const num1=[10,20,30,40,50]
const num1Value=num1.map((value)=>{
    return value+1
})
console.log(num1Value);

const word=['apple','mango','kiwi','guava']
const wordValue=word.map((value)=>{
    return value.toUpperCase()
})
 console.log(wordValue)


//filter
const large =[34,87,23,76,54,12]
const largeValue = large.filter((value)=>{
    return value>30
})
console.log(largeValue)

const even =[34,87,23,76,54,12]
const evenValue = even.filter((value)=>{
    return value%2==0
})
console.log(even)


//reduce
const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce((max,value) =>{
    return max > value ? max :value
});
console.log(sum)

const maxvalue = [45, 4, 9, 16, 25];
let maxvalue1 = maxvalue.reduce((total,value) =>{
    return total+ value 
});
console.log(maxvalue1)
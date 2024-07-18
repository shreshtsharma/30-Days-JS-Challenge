checkEvenOdd(5)

// function declaration : function declaration Can be called before they are defined because they are hoisted to the top of their scope. 

function checkEvenOdd(num){
    if(num%2==0)
        console.log("number is even");
    else 
        console.log("number is odd" );
    
}

// arrow and function expression cannot be called before its defination as they are not hoisted to top of their scope 

// arrow function
const findSquare=(num)=>{
    return num*num;
}


// function expression 
const findMax=function(a,b){
    if(a>b)
    {
        console.log(`a is greater than b`);
    }
    else if(b>a)
    {
        console.log(`b is greater than a`);
    }
    else
    {
        console.log(`both are equal`);
    }
}


// function expression
const concati=function(str1,str2){
    let str3=str1.concat(str2)
    
    return str3;
}

// Arrow functions
const findSum=(a,b)=>a+b;

const sum=findSum(7,8)

console.log(`sum is ${sum}`);

const findChar=(str)=>{
    for (const ch of str) {
        if(ch=='a')
        return true;
    }
    return false;
}

const res=findChar('vesham')
console.log(`result is ${res}`);

// providing default value to function parameters

function findProd(a,b=8){
    return a*b;
}
const prod=findProd(3);
console.log(`product is ${prod}`);

const msg=(name,age=21)=>`welcome ${name} as your age is ${age}`

const greet=msg('shresht')
console.log(greet);



// higher order functions

// write a higher-order function that takes a functions and a number and calls functions that many times 

let amount=0;

function sumUp(){
    amount+=2;
}

function caller(func,num)
{
    for(let i=0;i<num;i++)
    {
        func();
    }
}

caller(sumUp,5)

console.log(`amount is ${amount}`);


// write a H-O function that takes two functions and a value ,applies the first function to the value 
// and then applies second function to the result

function hofunc(fun1,fun2,temp)
{
    const res=fun1(temp);
    const final=fun2(res);
    return final
}

const fun1=(num)=>num*num;
const fun2=(val)=>val+val;

const result=hofunc(fun1,fun2,3);
console.log(`resullt of higher order function is ${result}`);



const sq=findSquare(5);
console.log(sq);
findMax(3,4)
let str=concati('hi','hello')
console.log(str);
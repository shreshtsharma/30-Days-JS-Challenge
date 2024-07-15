const num=-10;
if(num>0)
{
    console.log("number is positive");
}
else if(num<0){
    console.log("number is negative");
}
else
{
    console.log("number is ZERO");
}


let age=21;

if(age>=18)
{
    console.log("person is eligible to vote");
}
else 
{
    console.log("Person is not eligible to vote");
}

let a=34;
let b=99;
let c=32;

// nested if else

const findLargest=(a,b,c)=>{
    if(a>b)
    {
        if(a>c)
        {
            console.log("a is largest");
        }
        else
        {
            console.log("b is largest");
        }
    }

    else if(b>a)
    {
        if(b>c)
        {
            console.log("b is largest");

        }
        else
        {
            console.log("c is largest");

        }
    }
    else if(c>a)
    {
        if(c>b)
        {
            console.log("c is largest");

        }
        else
        {
            console.log("b is largest");

        }
    }
}

findLargest(a,b,c);


// Switch case

const day=4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;   
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}

let myobj={
    score:70,
    grade:'NA'

}
let {score,grade}=myobj;

switch (score) {
    case 90:
        grade='A'
        break;
    case 70:
        grade='B'
        break;
    case 60:
        grade='C'
        break;
    case 50:
        grade='D'
        break;  
    default:
        break;
}

myobj.grade=grade;
console.log(myobj.grade);

const myNum=9;
myNum%2==0 ? console.log("number is even") : console.log("number is odd");

const isLeapYear=(year)=>{
    if(year%4==0 && (year%100!=0 || (year %100==0 && year%400==0) ))
    {
        console.log(`${year} is a leap year`);
    }
    else
    {
        console.log(`${year} is not a leap year`);
    }
}

isLeapYear(2024);
isLeapYear(2023);
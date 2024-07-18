// Array creation and access
const arr=[1,2,3,4,5]
console.log(arr);
console.log(arr[0],arr[4]);

// Array methods (basic)

arr.push(6);
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(1)
console.log(arr);
arr.push(7)

// Array methods (intermediate)

const newArr=arr.map((num)=>num*2)
console.log(newArr);


const filArr=arr.filter((num)=>num%2==0)
console.log(filArr);

const sum=arr.reduce((acc,curr)=>acc+curr)
console.log(sum);


// Array Iteration 
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.forEach((num)=>{
    console.log(num);
})

// Multi dimensional arrays

const twodarr=[[1,2],[3,4],[4,5]]

console.log(twodarr);

console.log(twodarr[1][0]);

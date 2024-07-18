for (let i=1;i<=10;i++)
{
    console.log(i);
}

// table of 5
for (let i=1;i<=10;i++)
{
    console.log(`5x${i}=${5*i}`);
}

let num=0;
let sum=0;
while(num<=10)
{
    sum+=num;
    num++;
}
console.log(sum);

let a=10;
while(a>0)
{
    console.log(a);
    a--;
}

num=1;
do{
    console.log(num);
    num++;
}while(num<6)


let fact=1;
do{
    fact*=num;
    num--;
}while(num>0)

console.log(fact);


num=1;

while(num <=5)
{
    let str='';
    for(let i=0;i<num;i++)
    {
        str+='*'
    }
    console.log(str);
    num++;
}

for (let i=1;i<=10;i++)
{
    if(i==5)continue;
    console.log(i);
}

for (let i=1;i<=10;i++)
{
    if(i==7)break;
    console.log(i);
}
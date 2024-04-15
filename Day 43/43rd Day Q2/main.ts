const multiply = (...numbers:number[]):number => {
return numbers.reduce((product,num) => product * num,1)
} 
console.log(multiply(20,2,10));
console.log(multiply(10,15,40));


let age:number = 18;
age = 18;
console.log(age);//output 18

const Name = "Taha";
try {
    Name = "Saif";
} catch (error) {
    console.log("Error:Cannot assign to 'Name' because it is a constant");
    
}
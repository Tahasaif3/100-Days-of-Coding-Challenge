let mixedarray = [2,"Hockey",10,"cricket",false,"football"];

let stringarray = mixedarray.filter((item) => typeof item === "string");

console.log(stringarray);

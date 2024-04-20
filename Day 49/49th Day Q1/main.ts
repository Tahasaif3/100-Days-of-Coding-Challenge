function executeCallBack(
    callBack:(arg1:number,arg2:number) => void,
    arg1:number,
    arg2:number
): void {
    callBack(arg1,arg2);
};

let sum = (x:number,y:number) => {
console.log(x * y)
};
executeCallBack(sum,5,5);


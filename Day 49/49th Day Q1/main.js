//function executeCallBack(
//     callBack:(arg1:number,arg2:number) => void,
//     arg1:number,
//     arg2:number
// ): void {
//     callBack(arg1,arg2);
// };
// let sum = (x:number,y:number) => {
// console.log(x * y)
// };
// executeCallBack(sum,5,5);
function executeCallBack(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
;
var sum = function (x, y) {
    console.log(x * y);
};
executeCallBack(sum, 5, 10);

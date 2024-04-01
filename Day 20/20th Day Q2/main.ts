function makeAdder(valuetoAdd:number): (number) => number {
    return function(number:number):number {
        return number + valuetoAdd
    };
}
let addfive = makeAdder(10);
console.log(addfive(50));



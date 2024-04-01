// function make_car(
//     manufacturer:string,
//     model:string,
//     ...options:[string,any][]
// ) {
//    let car = {manufacturer,model};
//    options.forEach(([key, value]) => (car[key] = value));
//    return car
// };
// console.log(make_car("Toyota", "Corolla" , ["color","red"], ["model",2022]));
// console.log(make_car("Toyota", "Yaris" , ["color","black"], ["model",2023]));
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

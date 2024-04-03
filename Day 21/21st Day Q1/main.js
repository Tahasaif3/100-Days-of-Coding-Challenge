var vehicleCategory;
(function (vehicleCategory) {
    vehicleCategory[vehicleCategory["CAR"] = 0] = "CAR";
    vehicleCategory[vehicleCategory["TRUCK"] = 1] = "TRUCK";
    vehicleCategory[vehicleCategory["BUS"] = 2] = "BUS";
})(vehicleCategory || (vehicleCategory = {}));
var myvehicle = vehicleCategory.CAR;
console.log("My vehicle category is", vehicleCategory);

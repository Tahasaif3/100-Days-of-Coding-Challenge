function logObjectProperties(obj) {
    for (var property in obj)
        console.log("".concat(property, ": ").concat(obj[property]));
}
console.log("car for sell");
console.log("properties");
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Black"
});

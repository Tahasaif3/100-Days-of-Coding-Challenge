for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i = 5
    }
    console.log(i);
}
;
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("Taha"));
try {
    var result = riskyOperation();
    console.log(result);
}
catch (error) {
    console.error("An error occurred", error.message);
}
;

var mixedarray = [2, "Hockey", 10, "cricket", false, "football"];
var stringarray = mixedarray.filter(function (item) { return typeof item === "boolean"; });
console.log(stringarray);

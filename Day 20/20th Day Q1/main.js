function averageMarks() {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var totalmarks = marks.reduce(function (sum, totalmarks) { return sum + totalmarks; }, 0);
    return totalmarks / marks.length;
}
console.log(averageMarks(55, 65, 75, 85));

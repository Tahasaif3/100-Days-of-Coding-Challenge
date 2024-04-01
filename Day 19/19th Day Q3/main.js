var grades = [60, 70, 80, 90, 100];
var averageGrade = [grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length];
console.log(averageGrade);

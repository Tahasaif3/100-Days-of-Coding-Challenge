let grades = [60,70,80,90,100];

let averageGrade = [grades.reduce((total,grades) => total + grades,0) / grades.length];

console.log(averageGrade);


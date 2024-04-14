var students = new Map();
students.set(191, "Taha");
students.set(209, "Abdullah");
students.set(365, "Uzair");
students.set(455, "Ashad");
students.set(533, "Ahmed");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ",Student Name: ").concat(name));
});

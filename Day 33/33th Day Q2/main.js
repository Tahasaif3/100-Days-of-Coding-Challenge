function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var Days = Math.ceil(1000 * 60 * 60 * 24);
    return Days;
}
console.log(daysUntilNewYear() + "days untill new year");

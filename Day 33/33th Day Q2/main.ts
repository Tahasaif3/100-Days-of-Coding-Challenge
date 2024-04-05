function daysUntilNewYear():number {
    const today = new Date();
    const newYear = new Date(today.getFullYear()+1,0,1);
    const diff = newYear.getTime() - today.getTime();
    const Days = Math.ceil(1000 * 60 * 60 * 24);
    return Days;
}
console.log(daysUntilNewYear()+"days untill new year");

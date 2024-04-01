var mobile = {
    make: "Samsung",
    model: "S24 Ultra",
    year: "2024",
    describe: function () {
        console.log("This Mobile name is ".concat(this.model, " and is made by ").concat(this.make, " in the year ").concat(this.year, "."));
    }
};
mobile.describe();

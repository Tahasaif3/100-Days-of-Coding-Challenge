function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age < 20) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
;
console.log(categorizeAge(31));

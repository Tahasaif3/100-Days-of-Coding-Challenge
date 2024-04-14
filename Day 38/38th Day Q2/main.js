var countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Turkey", "Istanbul");
countries.set("Saudi Arabia", "Riyadh");
countries.set("United Arab Emirates", "Abu Dhabi");
countries.set("Azerbaijan", "Baku");
console.log(countries);
function logCapitalCountries(countries) {
    if (countries.has("England")) {
        console.log("The capital of England is ".concat(countries.get("Canada")));
    }
    else {
        console.log("England is not on the Map.");
    }
}
;
logCapitalCountries(countries);

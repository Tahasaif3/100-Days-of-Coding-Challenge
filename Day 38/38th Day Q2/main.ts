const countries = new Map<string, string>();
countries.set("Pakistan","Islamabad");
countries.set("Turkey","Istanbul");
countries.set("Saudi Arabia","Riyadh");
countries.set("United Arab Emirates","Abu Dhabi");
countries.set("Azerbaijan","Baku");


console.log(countries);


function logCapitalCountries(countries: Map<string, string>):void {
    if (countries.has("England")){
        console.log(`The capital of England is ${countries.get("Canada")}`);
        
    } else {
        console.log("England is not on the Map.");
        
    }

};
logCapitalCountries(countries)

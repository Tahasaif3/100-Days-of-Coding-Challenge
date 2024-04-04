function logObjectProperties(obj:object) {
    for (let property in obj)
    console.log(`${property}: ${obj[property]}`); 
}

logObjectProperties({
    make:"Toyota",
    model:"Corolla",
    year:2022,
    color:"Black"
});

{
    let blockLet = "visible only inside the block";
    const blockConst = "Also visible only inside the block";
    console.log(blockLet);
    console.log(blockConst);    
}

try {
    console.log(blockLet);  
} catch (error) {
    console.log("blockLet is only accesible outside the block.");  
}
try {
    console.log(blockConst);  
} catch (error) {
    console.log("blockConst is only accesible outside the block.");  
}
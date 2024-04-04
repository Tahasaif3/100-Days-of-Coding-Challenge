function swapValues() {
    let a = 5;
    let c = 10;
    console.log("Before swap: a = ",a,"c = ",c);

    let temp = a;
    a = c;
    c = temp  
    console.log("After swap: a = ",a,"c = ",c);
    
}
swapValues();
function swapValues() {
    var a = 5;
    var c = 10;
    console.log("Before swap: a = ", a, "c = ", c);
    var temp = a;
    a = c;
    c = temp;
    console.log("After swap: a = ", a, "c = ", c);
}
swapValues();

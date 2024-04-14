function evaluateGrade(Grade:string):void {
    switch (Grade) {
        case "A":
            console.log("Excellent");
        break;  
        case "B":
            console.log("Better");
        break;
        case "C":
            console.log("Good");
        break;
        case "D":
            console.log("Not Good");
        break;
        case "F":
            console.log("Fail");
        break;
        default:
            console.log("Invalid Grade");
        break;
    }
}
evaluateGrade("A")
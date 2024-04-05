"use strict";
// function getCurrentDateFormatted():string {
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2,'0');
//     const month = String(now.getMonth() +1).padStart(2,'0');
//     const year = now.getFullYear;
//     return `${day}-${month}-${year}`;
Object.defineProperty(exports, "__esModule", { value: true });
// }
// console.log(getCurrentDateFormatted());
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format

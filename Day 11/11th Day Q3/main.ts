// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(number => {
//     let ordinal: string;

//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }

//     console.log(`${number}${ordinal}`);
// });

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number => {
    let ordinal: string;

    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd"
    } else {
        ordinal = "th"
    }

    console.log(`${number}${ordinal}`);
});
function compareStringsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}


const string1 = "Taha";
const string2 = "Saif";
const stringsAreEqual = compareStringsIgnoreCase(string1, string2);
console.log(stringsAreEqual); // Output: false

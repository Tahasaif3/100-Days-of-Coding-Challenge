function compareStringsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
var string1 = "Taha";
var string2 = "Saif";
var stringsAreEqual = compareStringsIgnoreCase(string1, string2);
console.log(stringsAreEqual); // Output: false

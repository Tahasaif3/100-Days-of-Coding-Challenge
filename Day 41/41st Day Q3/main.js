function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syzygy");

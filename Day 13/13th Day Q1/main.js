function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("making a ".concat(size, " tshirt with the message ").concat(message, " printed on it"));
}
make_shirt("large", "I love typescript");
make_shirt("medium");
make_shirt("small", "I love coding");

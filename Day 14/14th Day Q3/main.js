var magicians = ["Ashad", "Ibrahim", "Zack King"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
;
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
show_magicians(magicians);

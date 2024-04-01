let magicians: string[] = ["Alama Iqbal", "Albert Einstein", "Taha Saif"];

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let greatMagicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
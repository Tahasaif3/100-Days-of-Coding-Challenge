function make_album(artist:string,title:string,tracks?:number){
    let album ={artist,title}
    if (tracks) {
        album["tracks"] = tracks
    } 
    return album;
}
console.log(make_album("Artist One","The 365 Lessons"));
console.log(make_album("Artist Two","The Impossible Physics"));
console.log(make_album("Artist Three","The magic of life", 15));

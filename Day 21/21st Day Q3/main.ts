type shape = {
   kind: "Circle" | "Rectangle"
   width?:number,
   height?:number,
   radius?:number,
}
let Circle: shape = {
 kind:"Circle",
 radius:5,
}
let Rectangle:shape = {
    kind:"Rectangle",
    width:40,
    height:30,
}
console.log(Circle);
console.log(Rectangle);


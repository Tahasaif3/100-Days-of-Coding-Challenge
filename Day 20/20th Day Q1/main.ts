function averageMarks(...marks:number[]): number {
    let totalmarks = marks.reduce((sum,totalmarks) => sum + totalmarks,0)
    return totalmarks / marks.length
}
console.log(averageMarks(55,65,75,85));

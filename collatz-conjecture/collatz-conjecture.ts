class CollatzConjecture {
    static steps(input: number, count:number=0): number {
        if(input <=0){
            throw new Error("Only positive numbers are allowed")
        }
        if(input===1){
            return count;
        }
        return this.steps(input %2 ===0 ?input/2 : (input*3 +1),++count)
    }
}

export default CollatzConjecture
import {ArgumentError, OperatorStrings} from "./wordy";
export const isValidQuestion=(question: string)=>question.startsWith("What is") && question.endsWith("?");
export const calculate=(leftNum:number,rightNum:number,operator:OperatorStrings):number=>{
    switch (operator) {
        case OperatorStrings.PLUS:
            return leftNum+rightNum
        case OperatorStrings.MINUS:
            return leftNum-rightNum
        case OperatorStrings.MULTIPLY:
            return leftNum*rightNum
        case OperatorStrings.DEVIDE:
            return leftNum/rightNum
        case OperatorStrings.POWER:
            return Math.pow(leftNum,rightNum)
        default:
            return 0;
    }
}
export const findOperator=(expression:string):OperatorStrings=>{
    for(const operator of Object.values(OperatorStrings)){
        if(expression.startsWith(operator)){
            return operator
        }
    }
    throw new ArgumentError 
}
import {calculate,findOperator} from "./utils"
export enum OperatorStrings {
    PLUS="plus",
    MINUS="minus",
    MULTIPLY="multiplied by",
    DEVIDE="divided by",
    POWER="raised to the"
}enum NextAction {
    CONVERT_INT="Convert int",
    PARSE_OPERATOR="Parse operator string"
}

export class WordProblem {
    constructor(private question: string) {
    }

    calculation(expressionString:string,currentResult:number=0,currentOperator:OperatorStrings=OperatorStrings.PLUS,nextAction:NextAction=NextAction.CONVERT_INT):number {
        if(nextAction===NextAction.CONVERT_INT){
            const exp = /^[-+]?\d+/;
            const matchString= expressionString.match(exp);
            if(matchString&& matchString.length){
                const operand=parseFloat(matchString[0]);
                const nextResult:number=calculate(currentResult,operand,currentOperator);
                const nextString=expressionString.replace(currentOperator===OperatorStrings.POWER?(matchString.input||""):exp,"").trim();
                if(nextString!==""){
                    return this.calculation(nextString,nextResult,currentOperator,NextAction.PARSE_OPERATOR)
                }else{
                    return nextResult;
                }
            }else{
                throw new ArgumentError
            }
         
        }else{
            const mOperator = findOperator(expressionString);
            const nextString=expressionString.replace(mOperator,"").trim();
            if(nextString!==""){
                return this.calculation(nextString,currentResult,mOperator,NextAction.CONVERT_INT);
            }else{
                throw new ArgumentError
            }
        }
    }
    answer(): number {
        const isValidQuestion = this.question.startsWith("What is") && this.question.endsWith("?");
        if(!isValidQuestion){
            throw new ArgumentError;
        }
        try{
            const expressionString:string = this.question.replace(/What is |\?/gi,"");
            return this.calculation(expressionString)
        }catch(e) {
            throw new ArgumentError;
        }
    }
}

export class ArgumentError extends Error{}
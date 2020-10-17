import Frame,{FrameType} from "./frame";
import {NUMBER_OF_FRAMES,ERROR} from "./constant"
import {checkValidPoint,checkGameEnd,checkFillFrameInvalid} from "./helper"

export default class Bowling {
    constructor(private rolls: number[]) {}
    calculateBonusPoints(rollIndex:number,type:FrameType):number {
        switch (type) {
            case FrameType.strike:
                return this.rolls[rollIndex+1]+this.rolls[rollIndex+2]
            case FrameType.spare:
                return  this.rolls[rollIndex+1]
            default:
                return 0;
        }
    }
    score() : number {
        const frames:Frame[]=this.rolls.reduce<Frame[]>((accFrames,rollPoints,rollIndex)=>{
            if(!checkValidPoint(rollPoints)){
                throw new Error(ERROR.INVALLID_POINT)
            }
            if(!accFrames.length || accFrames[accFrames.length-1].frameType!==FrameType.unknown){
                const newFrame = new Frame();
                newFrame.roll(rollPoints);
                newFrame.setBonusPoint(this.calculateBonusPoints(rollIndex,newFrame.getFrameType()))
                accFrames.push(newFrame);
            }
            else{
                const lastFrame = accFrames[accFrames.length-1];
                lastFrame.roll(rollPoints)
                lastFrame.setBonusPoint(this.calculateBonusPoints(rollIndex,lastFrame.getFrameType()));
            }
           return accFrames;
        },[])
        if(!checkGameEnd(frames)){
            throw new Error(ERROR.UNFINISHED_GAME)
        }
        if(!checkFillFrameInvalid(frames)){
            throw new Error(ERROR.EXCEED_FILL_FRAME)
        }
        const totalPoints = frames.reduce((acc,curr,index)=>index<NUMBER_OF_FRAMES?acc+curr.geTotalPoints():acc,0)
        return totalPoints;
    }
}
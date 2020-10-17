import {NUMBER_OF_PINS,NUMBER_OF_FRAMES} from "./constant"
import {FrameType} from "./frame"
import Frame from "./frame";

export const sumUpArray = (mArray:number[]):number=>mArray.reduce((acc,curr)=>acc+curr,0)
export const checkValidPoint = (point:number):boolean=>point>=0 && point<=NUMBER_OF_PINS 
const isFrameStrikeOrSpare=(frame:Frame)=>frame.frameType===FrameType.strike || frame.frameType===FrameType.spare
const isFrameStrike=(frame:Frame)=>frame.frameType===FrameType.strike ;
export const checkGameEnd=(frames:Frame[] ):boolean=>{
    if(frames.length > NUMBER_OF_FRAMES-1){
        if(frames.length===NUMBER_OF_FRAMES){
            return  isFrameStrikeOrSpare(frames[NUMBER_OF_FRAMES-1])?false:true
        }
        else if(frames.length===NUMBER_OF_FRAMES +1 ){
            return isFrameStrike(frames[NUMBER_OF_FRAMES-1]) &&isFrameStrike(frames[NUMBER_OF_FRAMES])?false:true
        }
        return true
    }
    return false;
}
export const checkFillFrameInvalid=(frames: Frame[]):boolean=>{
    if(frames.length>NUMBER_OF_FRAMES && !isFrameStrikeOrSpare(frames[NUMBER_OF_FRAMES-1])){
        return false;
    }
    return true;
}
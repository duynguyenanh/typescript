import {sumUpArray} from "./helper"
import {NUMBER_OF_PINS,MAX_ROLLS_EACH_FRAME,ERROR} from "./constant";

export enum FrameType {
    open="OPEN",
    spare="SPARE",
    strike="STRIKE",
    unknown="UNKNOWN"
}
export default class Frame {
    framePoints: number[];
    frameType: FrameType;
    bonusPoints: number;
    constructor() {
        this.framePoints=[];
        this.frameType=FrameType.unknown;
        this.bonusPoints=0;
    }
    setBonusPoint(points:number):void {
        this.bonusPoints=points;
    }
    setFramePoints(points:number[]):void{
        this.framePoints=points;
    }
    setFrameType(type: FrameType):void {
        this.frameType=type;
    }
    getFrameType():FrameType {
        return this.frameType;
    }
    roll(point:number){
        this.framePoints.push(point);
        if(this.framePoints[0]===NUMBER_OF_PINS){
            this.frameType=FrameType.strike;
        }else if(this.framePoints.length===MAX_ROLLS_EACH_FRAME){
            const defaultFramePoints = sumUpArray(this.framePoints)
            if(defaultFramePoints > NUMBER_OF_PINS){
                throw new Error(ERROR.EXCEED_MAX_POINTS)
            }
            defaultFramePoints===NUMBER_OF_PINS?
            this.frameType=FrameType.spare:
            this.frameType=FrameType.open
        }
    }
    geTotalPoints():number{
       return sumUpArray(this.framePoints)+this.bonusPoints;
    }
    getFramePoint():number[]{
        return this.framePoints
    }
}

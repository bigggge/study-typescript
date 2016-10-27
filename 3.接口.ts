/**
 * Created by xiepan on 2016/10/27.
 */

function printLabel(labelledObj: {label: string}) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: "size 10 object"};

printLabel(myObj);


interface LabelledValue {
    label: string;
}

function printLabelByInterface(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObjByInterface = {size: 10, label: 'size 10 object'};
printLabelByInterface(myObjByInterface);


//option bags
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string;area: number} {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: 'black'});
console.log(mySquare);

//readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
//Error:(53, 1) TS2450:
//Left-hand side of assignment expression cannot be a constant or a read-only property.
// p1.x = 5;

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
    }
}
//TODO

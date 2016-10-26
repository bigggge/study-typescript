/**
 * Created by xiepan on 2016/10/26.
 */


//boolean
let isDone: boolean = false;

//number
let decLiteral: number = 6;

//string
let name1: string = 'xp';

let age1: number = 19;
let sentence: string = `hello,my name is ${name}.
i'm ${age1} years old`;

//array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//tuple
let x: [string,number];
x = ['hello', 10];
// x = [10, 'hello'];

console.log(x[0].substr(1));
// console.log(x[1].substr(1));

//enum

enum Color{Red, Green, Blue}
let c: Color = Color.Green;

//any
let notSure: any = 4;
notSure = 'maybe';
notSure = false;

//void
let unusable: void = undefined;

// let u: undefined = undefined;
// let n: null = null;

//never

// function infiniteLoop(): never {
//     while (true) {
//     }
// }
/**
 * Created by xiepan on 2016/10/26.
 */
//boolean
var isDone = false;
//number
var decLiteral = 6;
//string
var name1 = 'xp';
var age1 = 19;
var sentence = "hello,my name is " + name + ".\ni'm " + age1 + " years old";
//array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var x;
x = ['hello', 10];
// x = [10, 'hello'];
console.log(x[0].substr(1));
// console.log(x[1].substr(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//any
var notSure = 4;
notSure = 'maybe';
notSure = false;
//void
var unusable = undefined;
// let u: undefined = undefined;
// let n: null = null;
//never
// function infiniteLoop(): never {
//     while (true) {
//     }
// } 
//# sourceMappingURL=hello-typescript.js.map
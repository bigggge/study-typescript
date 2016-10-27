/**
 * Created by xiepan on 2016/10/27.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
function printLabelByInterface(labelledObj) {
    console.log(labelledObj.label);
}
var myObjByInterface = { size: 10, label: 'size 10 object' };
printLabelByInterface(myObjByInterface);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
//TODO
//# sourceMappingURL=3.接口.js.map
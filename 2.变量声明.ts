/**
 * Created by xiepan on 2016/10/27.
 */


// setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。
// for循环结束后，i的值为10。
// 所以当函数被调用的时候，它会打印出 10！
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}


for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    }(i));
}

// a++;//Error:(24, 1) TS2448:
// Block-scoped variable 'a' used before its declaration.
let a;//

const b = 'a';
// Error:(29, 1) TS2450:
// Left-hand side of assignment expression cannot be a constant.
// b = 'b';
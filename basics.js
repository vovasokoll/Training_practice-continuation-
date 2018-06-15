"use strict"
;

function quadratic(a, b, c) {
    var d = b * b - 4 * a * c;
    var eps = 1e-7;
    if (d > eps) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log("Roots = " + x1 + " and " + x2);
    }
    if (Math.abs(d) < Math.abs(eps)) {
        var x1 = (-b) / (2 * a);
        console.log("Root of the quadratic equation = " + x1);
    }
    if (-d > eps) {
        console.log("There are no roots of the quadratic equation");
        return false;
    }
    return true;
}

function isPrime(number) {
    if (number == 1) {
        console.log("Number " + number + " no prime");
        return false;
    }
    var flag = true;
    for (var i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("Number " + number + " is prime");
    }
    else {
        console.log("Number " + number + " no prime");
    }
    return flag;
}

function summaSeries(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += (1. / i);
    }
    console.log("Sum to " + n + " is " + sum);
    return sum;
}

function reverseNumber(str) {
    var arr = (str + "").split('');
    arr.reverse();
    console.log("Reverse number is " + arr.join(""));
    return str;
}

function divideArray(arr) {
    var pArr = [];
    var nArr = [];
    for (var i in arr) {
        if (arr[i] > 0) {
            pArr.push(arr[i]);
        }
        if (arr[i] < 0) {
            nArr.push(arr[i]);
        }
    }
    console.log("Array B " + pArr);
    console.log("Array C " + nArr);
}

function amountElement(arr) {
    var map = new Map();
    for (var i in arr) {
        var num = 0;
        if (map.has(arr[i])) {
            num = map.get(arr[i]);

        }
        num++;
        map.set(arr[i], num);
    }
    var str = "";
    map.forEach(function (value, key, map) {
        str += (key + " - " + value + "; ")
    })
    console.log(str);
}

function isAnagrams(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    var s1 = str1.split("").sort();
    var s2 = str2.split("").sort();
    for (var i = 0; i < str1.length; ++i) {
        if (s1[i] != s2[i]) {
            return false;
        }

    }
    return true;
}

function Machine(power) {
    this._power = power;
    this._enable = false;
    var self = this;
    this.enable = function () {
        self._enable = true;
    };
    this.disable = function () {
        self._enable = false;
    };
}

function Fridge(power) {
    Machine.call(this, power);
    let food = [];
    this.addFood = function () {
        if (!this._enable) {
            console.log("Refrigerator off")
        }
        var col = (this._power / 100);
        for (let i in arguments) {
            let item = arguments[i];
            if (col >= food.length + 1) {
                food.push(item);
            } else {
                console.log("Refrigerator is full");
                break;
            }
        }
    };
    this.getFood = function () {
        let arr = [];
        for (let i in food) {
            arr.push(food[i]);
        }
        return arr;
    };
}

console.log(quadratic(1, 1.5, 1.7));
console.log(quadratic(-1, 1.5, 1000));
console.log(quadratic(1, 4, 4));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(199));
console.log(isPrime(333));
console.log(summaSeries(1000000));
console.log(reverseNumber(123));
console.log(divideArray([1, 23, 4, 0, 35, 235, 32, -3, -2, 1, -4, -5, -2, 234, 23, -2]));
console.log(amountElement([1, 2, 1, 2, 3.14, 4, 2, 1]));
console.log(amountElement([1, 0, 0, 0, 0, 0, -1]));
console.log(isAnagrams("lemon", "melon"));
console.log(isAnagrams("cat", "melon"));
console.log(isAnagrams("lemonkasm", "melonmask"));

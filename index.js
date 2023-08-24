function divideTwoNum(num1, num2) {

    if (num2 === 0) {
        return 0;
    }

    if (typeof num1 === "string" || typeof num2 === "string") {
        return "input is not number"
    }
    return num1 / num2;
}

module.exports = { divideTwoNum };

// console.log(divideTwoNum(113, 5))
// console.log(divideTwoNum("113", 5))
// console.log(divideTwoNum(113, 0))
const { divideTwoNum } = require("../index.js")

var expect = require("chai").expect;

describe("testing Divide Fun", () => {
    it("should perform division on providing two numbers > 0 ", () => {
        expect(divideTwoNum(10, 5)).to.equal(2)
    })
    it("should return 0 on providing number 0 ", () => {
        expect(divideTwoNum(10, 0)).to.equal(0)
    })
    it("should return erro msg on providing a strings ", () => {
        expect(divideTwoNum(10, "1")).to.equal("input is not number")
    })
})


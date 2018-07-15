"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Evaluate_1 = require("./Evaluate");
describe("Simple expression tests", () => {
    test("Check literal value", () => {
        expect(Evaluate_1.default.evaluate({ type: "literal", value: 5 })).toBeCloseTo(5);
    });
    test("Check addition", () => {
        let expr = bin("+", 5, 10);
        expect(Evaluate_1.default.evaluate(expr)).toBeCloseTo(15);
    });
    test("Check subtraction", () => {
        let expr = bin("-", 5, 10);
        expect(Evaluate_1.default.evaluate(expr)).toBeCloseTo(-5);
    });
    test("Check multiplication", () => {
        let expr = bin("*", 5, 10);
        expect(Evaluate_1.default.evaluate(expr)).toBeCloseTo(50);
    });
    test("Check division", () => {
        let expr = bin("/", 10, 5);
        expect(Evaluate_1.default.evaluate(expr)).toBeCloseTo(2);
    });
});
function bin(op, x, y) {
    return {
        type: "binary",
        operator: op,
        left: { type: "literal", value: x },
        right: { type: "literal", value: y },
    };
}
//# sourceMappingURL=Evaluate.test.js.map
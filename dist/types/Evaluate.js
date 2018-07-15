"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evaluate {
    constructor() {
    }
    evaluate(expr) {
        switch (expr.type) {
            case "literal": {
                return expr.value;
            }
            case "binary": {
                switch (expr.operator) {
                    case "+":
                        return this.evaluate(expr.left) + this.evaluate(expr.right);
                    case "-":
                        return this.evaluate(expr.left) - this.evaluate(expr.right);
                    case "*":
                        return this.evaluate(expr.left) * this.evaluate(expr.right);
                    case "/":
                        return this.evaluate(expr.left) / this.evaluate(expr.right);
                }
            }
        }
    }
}
exports.default = new Evaluate();
//# sourceMappingURL=Evaluate.js.map
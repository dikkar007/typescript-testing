import { Expression } from "./types";

class Evaluate {

    constructor() {
    }
    public evaluate(expr: Expression): number {
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

export default new Evaluate();

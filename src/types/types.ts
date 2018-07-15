export interface Literal {
    type: "literal";
    value: number;
}

export type BinaryOperators = "+" | "-" | "*" | "/";
export interface BinaryOperation {
    type: "binary";
    operator: BinaryOperators;
    left: Literal;
    right: Literal;
}

export type Expression = Literal | BinaryOperation;

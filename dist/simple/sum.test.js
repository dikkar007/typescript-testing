"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
test('basic', () => {
    expect(sum_1.sum()).toBe(0);
});
test('basic again', () => {
    expect(sum_1.sum(1, 2)).toBe(3);
});
test('basic', () => __awaiter(this, void 0, void 0, function* () {
    expect(sum_1.sum()).toBe(0);
}));
test('basic again', () => __awaiter(this, void 0, void 0, function* () {
    expect(sum_1.sum(1, 2)).toBe(3);
}), 1000 /* optional timeout */);
//# sourceMappingURL=sum.test.js.map
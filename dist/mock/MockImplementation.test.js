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
const SoundPlayer_1 = require("./SoundPlayer");
const SoundPlayerConsumer_1 = require("./SoundPlayerConsumer");
jest.mock('./SoundPlayer');
describe('When SoundPlayer throws an error', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => {
        SoundPlayer_1.default.mockImplementation(() => {
            return {
                playSoundFile: (fileName) => {
                    throw new Error('Test error');
                },
            };
        });
    });
    it('Should throw an error when calling playSomethingCool', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer_1.default();
        expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
    });
}));
//# sourceMappingURL=MockImplementation.test.js.map
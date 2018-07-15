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
class Http {
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    id: 4,
                    first_name: 'Eve',
                    last_name: 'Holt',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
                },
                {
                    id: 5,
                    first_name: 'Charles',
                    last_name: 'Morris',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
                },
                {
                    id: 6,
                    first_name: 'Tracey',
                    last_name: 'Ramos',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
                },
            ];
        });
    }
}
exports.default = Http;
//# sourceMappingURL=Http.js.map
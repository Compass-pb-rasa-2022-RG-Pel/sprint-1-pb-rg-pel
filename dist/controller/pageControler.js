"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randon = exports.home = void 0;
const axios_1 = __importDefault(require("axios"));
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get('https://api.adviceslip.com/advice');
    axios_1.default.post("https://libretranslate.de/translate", {
        q: `${data.slip.advice}`,
        source: "en",
        target: "pt",
        format: "text"
    }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        res.render('pages/page', { response });
    });
});
exports.home = home;
const randon = (req, res) => {
    res.send('controler docs');
};
exports.randon = randon;

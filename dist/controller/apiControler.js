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
    let lang = req.query;
    let trg = "pt";
    if (Object.keys(lang).length !== 0 && lang.constructor === Object) {
        trg = req.query.contry;
    }
    let options = `<option value="en" ${trg == "en" ? "selected" : ""}>English</option>
                        <option value="ar" ${trg == "ar" ? "selected" : ""}>Arabic</option>
                        <option value="az" ${trg == "az" ? "selected" : ""}>Azerbaijani</option>
                        <option value="zh" ${trg == "zh" ? "selected" : ""}>Chinese</option>
                        <option value="cs" ${trg == "cs" ? "selected" : ""}>Czech</option>
                        <option value="nl" ${trg == "nl" ? "selected" : ""}>Dutch</option>
                        <option value="fi" ${trg == "fi" ? "selected" : ""}>Finnish</option>
                        <option value="fr" ${trg == "fr" ? "selected" : ""}>French</option>
                        <option value="de" ${trg == "de" ? "selected" : ""}>German</option>
                        <option value="hi" ${trg == "hi" ? "selected" : ""}>Hindi</option>
                        <option value="hu" ${trg == "hu" ? "selected" : ""}>Hungarian</option>
                        <option value="id" ${trg == "id" ? "selected" : ""}>Indonesian</option>
                        <option value="ga" ${trg == "ga" ? "selected" : ""}>Irish</option>
                        <option value="it" ${trg == "it" ? "selected" : ""}>Italian</option>
                        <option value="ja" ${trg == "ja" ? "selected" : ""}>Japanese</option>
                        <option value="ko" ${trg == "ko" ? "selected" : ""}>Korean</option>
                        <option value="pl" ${trg == "pl" ? "selected" : ""}>Polish</option>
                        <option value="pt" ${trg == "pt" ? "selected" : ""} >Portuguese</option>
                        <option value="ru" ${trg == "ru" ? "selected" : ""}>Russian</option>
                        <option value="es" ${trg == "es" ? "selected" : ""}>Spanish</option>
                        <option value="sv" ${trg == "sv" ? "selected" : ""}>Swedish</option>
                        <option value="tr" ${trg == "tr" ? "selected" : ""}>Turkish</option>
                        <option value="uk" ${trg == "uk" ? "selected" : ""}>Ukranian</option>
                        <option value="vi" ${trg == "vi" ? "selected" : ""}>Vietnamese</option>`;
    const { data } = yield axios_1.default.get('https://api.adviceslip.com/advice');
    axios_1.default.post("https://libretranslate.de/translate", {
        q: `${data.slip.advice}`,
        source: "en",
        target: trg,
        format: "text"
    }).then((response) => {
        const txt = data.slip.advice;
        res.render('pages/page', { response, txt, trg, options });
    });
});
exports.home = home;
const randon = (req, res) => {
    res.send('controler docs');
};
exports.randon = randon;

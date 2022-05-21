import { Request, Response } from "express";
import axios from 'axios';

export const home = async (req:Request, res: Response) => {
  let lang = req.query ;
  let trg: string = "pt";

  if(Object. keys(lang). length !== 0 && lang. constructor === Object){
    trg = req.query.contry as string;
  }

  let options: string =`<option value="en" ${trg == "en" ? "selected": ""}>English</option>
                        <option value="ar" ${trg == "ar" ? "selected": ""}>Arabic</option>
                        <option value="az" ${trg == "az" ? "selected": ""}>Azerbaijani</option>
                        <option value="zh" ${trg == "zh" ? "selected": ""}>Chinese</option>
                        <option value="cs" ${trg == "cs" ? "selected": ""}>Czech</option>
                        <option value="nl" ${trg == "nl" ? "selected": ""}>Dutch</option>
                        <option value="fi" ${trg == "fi" ? "selected": ""}>Finnish</option>
                        <option value="fr" ${trg == "fr" ? "selected": ""}>French</option>
                        <option value="de" ${trg == "de" ? "selected": ""}>German</option>
                        <option value="hi" ${trg == "hi" ? "selected": ""}>Hindi</option>
                        <option value="hu" ${trg == "hu" ? "selected": ""}>Hungarian</option>
                        <option value="id" ${trg == "id" ? "selected": ""}>Indonesian</option>
                        <option value="ga" ${trg == "ga" ? "selected": ""}>Irish</option>
                        <option value="it" ${trg == "it" ? "selected": ""}>Italian</option>
                        <option value="ja" ${trg == "ja" ? "selected": ""}>Japanese</option>
                        <option value="ko" ${trg == "ko" ? "selected": ""}>Korean</option>
                        <option value="pl" ${trg == "pl" ? "selected": ""}>Polish</option>
                        <option value="pt" ${trg == "pt" ? "selected": ""} >Portuguese</option>
                        <option value="ru" ${trg == "ru" ? "selected": ""}>Russian</option>
                        <option value="es" ${trg == "es" ? "selected": ""}>Spanish</option>
                        <option value="sv" ${trg == "sv" ? "selected": ""}>Swedish</option>
                        <option value="tr" ${trg == "tr" ? "selected": ""}>Turkish</option>
                        <option value="uk" ${trg == "uk" ? "selected": ""}>Ukranian</option>
                        <option value="vi" ${trg == "vi" ? "selected": ""}>Vietnamese</option>`;
  
  const { data } = await axios.get('https://api.adviceslip.com/advice');
  
  //const tranlate = await axios.post("https://libretranslate.de/translate", {
    axios.post("https://libretranslate.de/translate", {
      q: `${data.slip.advice}`,
      source: "en",
      target: trg,
      format: "text"
    }).then((response) => {
     
      const txt: string = data.slip.advice as string
      res.render('pages/page', {response, txt, trg, options});
    });
    
  }

export const randon = (req:Request, res: Response) => {
    res.send('controler docs')
}
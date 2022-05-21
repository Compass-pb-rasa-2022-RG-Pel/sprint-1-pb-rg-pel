import { Request, Response } from "express";
import axios from 'axios';

export const home = async (req:Request, res: Response) => {
  const { data } = await axios.get('https://api.adviceslip.com/advice');
  
  //const tranlate = await axios.post("https://libretranslate.de/translate", {
    axios.post("https://libretranslate.de/translate", {
      q: `${data.slip.advice}`,
      source: "en",
      target: "pt",
      format: "text"
    }).then((response) => {
      console.log(response.status);
      console.log(response.data);
      res.render('pages/page', {response});
    });
    
  }

export const randon = (req:Request, res: Response) => {
    res.send('controler docs')
}
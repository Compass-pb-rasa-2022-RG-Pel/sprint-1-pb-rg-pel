import {Router} from 'express';
const router = Router()

router.get('/',(req, res)=>{
    res.send('HOME');
});


export default router;
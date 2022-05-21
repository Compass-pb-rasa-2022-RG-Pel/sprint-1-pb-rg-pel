import {Router} from 'express';
import * as PageControler from '../controller/pageControler';

const router = Router()

router.get('/', PageControler.home);
router.get('/randon', PageControler.randon);


export default router;
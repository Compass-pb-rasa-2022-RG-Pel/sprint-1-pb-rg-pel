import {Router} from 'express';
import * as ApiControler from '../controller/apiControler';

const router = Router()

router.get('/', ApiControler.home);
router.get('/randon', ApiControler.randon);


export default router;
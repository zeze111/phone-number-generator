import express from 'express';
import controller from './controllers';

const router = express.Router();

router.post('/', controller.generate);
// router.get('/phonenumbers');
// router.get('/sort/:order');
// router.get('./find/:max')

export default router;

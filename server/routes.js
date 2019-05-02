import express from 'express';
import numbers from './controllers';

const router = express.Router();

router.post('/', numbers.generate);
router.get('/phone-numbers', numbers.getAll);
router.get('/phone-numbers/sort/:order', numbers.sortAll);
router.delete('/phone-numbers', numbers.clearAll)

export default router;

import express from 'express'
import { register, login, logout } from '../controllers/Auth.js';
const router = express.Router()

router.post('/registrar', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;

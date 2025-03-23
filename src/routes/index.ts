import { Router } from 'express';
import userRoutes from './api/userroutes.js';
import thoughtRoutes from './api/thoughtroutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;

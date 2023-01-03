import { Router } from 'express';

// Routes
import AppRoute from '@server/routes/App';
import CommonRoute from '@server/routes/Common';

const router = Router();

router.use('/app', AppRoute);
router.use('/common', CommonRoute);

export default router;

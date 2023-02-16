import { Router } from 'express';

// Controllers
import controllers from '@server/controllers/Web';

const router = Router();

// Get
router.get('/', controllers.projects.shortlist);
router.get('/:projectID', controllers.projects.info);

export default router;

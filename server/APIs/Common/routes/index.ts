import { Router } from 'express';

// Controllers
import controllers from '@server/controllers/Common';

// Middleware
import middleware from '@server/middleware/Common';

const router = Router();

// Post
router.post(
    '/images',
    middleware.auth,
    middleware.upload,
    controllers.image.upload
);

// Delete
router.delete('/images', controllers.image.remove);

export default router;

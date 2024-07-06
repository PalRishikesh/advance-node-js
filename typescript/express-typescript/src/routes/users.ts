import { Router, Request, Response } from 'express';
import { createUser, getUserById, getUsers } from '../handlers/users';

// New Router instance
const router = Router();

// Users routes
router.get('/', getUsers);

router.get('/:id',getUserById);

router.post('/',createUser)

export default router;
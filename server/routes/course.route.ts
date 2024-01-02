import express from 'express';
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  editCourse,
  getAllCourse,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from '../controllers/course.controller';
import { authorizeRoles, isAutheticated } from '../middleware/auth';
const courseRouter = express.Router();

courseRouter.post(
  '/create-course',
  isAutheticated,
  authorizeRoles('admin'),
  uploadCourse
);

courseRouter.put(
  '/edit-course/:id',
  isAutheticated,
  authorizeRoles('admin'),
  editCourse
);

courseRouter.get('/course/:id', getSingleCourse);
courseRouter.get('/courses', getAllCourse);
courseRouter.get('/course-content/:id', isAutheticated, getCourseByUser);
courseRouter.put('/add-question', isAutheticated, addQuestion);
courseRouter.put('/add-answer', isAutheticated, addAnswer);
courseRouter.put('/add-review/:id', isAutheticated, addReview);
courseRouter.put('/add-reply', isAutheticated, authorizeRoles("admin"), addReplyToReview);
export default courseRouter;
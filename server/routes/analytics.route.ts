import express from 'express';
import { authorizeRoles, isAutheticated } from '../middleware/auth';
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from '../controllers/analytics.controller';

const analyticsRouter = express.Router();

analyticsRouter.get(
  '/users-analytics',
  isAutheticated,
  authorizeRoles('admin'),
  getUsersAnalytics
);

analyticsRouter.get(
  '/orders-analytics',
  isAutheticated,
  authorizeRoles('admin'),
  getOrdersAnalytics
);

analyticsRouter.get(
  '/courses-analytics',
  isAutheticated,
  authorizeRoles('admin'),
  getCoursesAnalytics
);
export default analyticsRouter;

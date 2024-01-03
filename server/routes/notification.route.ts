import express from 'express';
import { authorizeRoles, isAutheticated } from '../middleware/auth';
import {
  getNotifications,
  updateNotifications,
} from '../controllers/notification.controller';

const notificationRoute = express.Router();

notificationRoute.get(
  '/notifications',
  isAutheticated,
  authorizeRoles('admin'),
  getNotifications
);

notificationRoute.put(
  '/update-notification/:id',
  isAutheticated,
  authorizeRoles('admin'),
  updateNotifications
);

export default notificationRoute;

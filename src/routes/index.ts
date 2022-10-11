import { ApiRoutes } from '@enums';
import type { Services } from '@services';
import type { Router } from 'express';
import { initFormRoutes } from './form.routes';

export const initRoutes = (services: Services): Router[] => [
  initFormRoutes(services, ApiRoutes.REVIEW),
];

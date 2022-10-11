import type { ApiRoutes } from '@enums';
import { wrap } from '@helpers';
import { JoiValidationMiddleware } from '@middlewares';
import type { Services } from '@services';
import { formSchema } from '@validation';
import type { Request } from 'express';
import { Router } from 'express';

export const initFormRoutes = (
  { formService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    path,
    wrap(() => formService.getMessages()),
  );

  router.post(
    path,
    JoiValidationMiddleware(formSchema),
    wrap((req: Request) => formService.addMessage(req.body, req.t)),
  );

  return router;
};

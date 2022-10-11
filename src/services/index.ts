import type { Repositories } from '@repositories';
import type { ServicesInit } from '@types';
import { FormService } from './form.service';

export const initServices = (repositories: Repositories): ServicesInit => {
  const formService = new FormService(repositories.formRepository);

  return {
    formService,
  };
};

export type Services = ReturnType<typeof initServices>;

export { type FormService };

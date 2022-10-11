import type { FormRepository } from '@repositories';
import type { FormService } from '@services';

export type ServicesInit = {
  formService: FormService;
};
export type RepositoriesInit = {
  formRepository: FormRepository;
};

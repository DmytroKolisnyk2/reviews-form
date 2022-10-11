import type { RepositoriesInit } from '@types';
import type { Pool } from 'pg';
import { FormRepository } from './form.repository';

export const initRepositories = (pool: Pool): RepositoriesInit => ({
  formRepository: new FormRepository(pool),
});

export type Repositories = ReturnType<typeof initRepositories>;

export { type FormRepository };

import type { IForm } from '@types';
import type { Pool } from 'pg';

export class FormRepository {
  private _dbClient: Pool;

  constructor(pool) {
    this._dbClient = pool;
  }

  async getAll(): Promise<IForm[]> {
    const allReviews = await this._dbClient.query<IForm[]>(
      'SELECT * FROM form;',
    );
    console.log(allReviews.rows);

    return allReviews.rows[0];
  }

  async create(form: IForm): Promise<IForm> {
    const createdForm = await this._dbClient.query<IForm>(
      'INSERT INTO form (name, email, message) values ($1, $2, $3) RETURNING *',
      [form.name, form.email, form.message],
    );

    return createdForm.rows[0];
  }

  async isEmailExists(email: string): Promise<boolean> {
    const createdForm = await this._dbClient.query<IForm>(
      'SELECT email FROM form WHERE email = $1 LIMIT 1;',
      [email],
    );

    return !!createdForm.rows[0];
  }
}

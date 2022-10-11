import type { FormRepository } from '@repositories';
import type { IForm } from '@types';
import { EmailExistError } from 'error';
import type { TFunction } from 'i18next';

export class FormService {
  private _formRepository: FormRepository;

  constructor(formRepository: FormRepository) {
    this._formRepository = formRepository;
  }

  async getMessages(): Promise<IForm[]> {
    return this._formRepository.getAll();
  }

  async addMessage(form: IForm, t: TFunction): Promise<IForm> {
    if (await this._formRepository.isEmailExists(form.email)) {
      throw new EmailExistError(t);
    }

    return this._formRepository.create(form);
  }
}

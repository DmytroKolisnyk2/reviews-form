import { StatusCode } from '@enums';
import { ErrorMessage } from '@utils';
import type { TFunction } from 'i18next';

class EmailExistError extends ErrorMessage {
  constructor(t: TFunction) {
    super({
      status: StatusCode.BAD_REQUEST,
      message: t('form:validation.email.exist'),
    });
  }
}

export { EmailExistError };

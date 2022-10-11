import { FormValidationConfig } from '@constants';
import type { IForm } from '@types';
import type { TFunction } from 'i18next';
import type { Schema } from 'joi';
import Joi from 'joi';

export const formSchema = (t: TFunction): Schema =>
  Joi.object<IForm>({
    email: Joi.string()
      .trim()
      .pattern(FormValidationConfig.EMAIL_PATTERN)
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.pattern.base': t('form:validation.email.pattern'),
        'string.email': t('form:validation.email.pattern'),
        'string.empty': t('form:validation.email.required'),
        'any.required': t('form:validation.email.required'),
      }),
    message: Joi.string()
      .trim()
      .min(FormValidationConfig.MIN_MESSAGE_LENGTH)
      .max(FormValidationConfig.MAX_MESSAGE_LENGTH)
      .required()
      .messages({
        'string.min': t('form:validation.message.short'),
        'string.max': t('form:validation.message.long'),
        'any.required': t('form:validation.message.required'),
      }),
    name: Joi.string()
      .trim()
      .min(FormValidationConfig.MIN_NAME_LENGTH)
      .max(FormValidationConfig.MAX_NAME_LENGTH)
      .required()
      .messages({
        'string.min': t('form:validation.name.short'),
        'string.max': t('form:validation.name.long'),
        'any.required': t('form:validation.name.required'),
      }),
  });

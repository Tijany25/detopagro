import { cx } from '@/modules/lib/utility/utility';
import React from 'react';
import Icon from '../../icon/Icon';
import { FormikErrors } from 'formik';

interface InputAlertProps {
  hasError?: boolean;
  errorMessage?: string | string[] | FormikErrors<JSON> | FormikErrors<Date> | undefined;
}

const isFormikErrorsJSON = (
  errors?: FormikErrors<JSON> | FormikErrors<Date>
): errors is FormikErrors<JSON> => {
  return typeof errors === 'object' && errors !== null && 'JSON' in errors;
};

const isFormikErrorsDate = (
  errors?: FormikErrors<JSON> | FormikErrors<Date>
): errors is FormikErrors<Date> => {
  return typeof errors === 'object' && errors !== null && 'Date' in errors;
};

const renderErrorMessage = (errorMessage: InputAlertProps['errorMessage']) => {
  if (typeof errorMessage === 'string') {
    return errorMessage;
  } else if (Array.isArray(errorMessage)) {
    return errorMessage.join(', ');
  } else if (isFormikErrorsJSON(errorMessage)) {
    return errorMessage as string;
  } else if (isFormikErrorsDate(errorMessage)) {
    return errorMessage as string;
  } else {
    return undefined;
  }
};

const InputAlert: React.FC<InputAlertProps> = ({ hasError, errorMessage }) => {
  return (
    <div
      className={cx('notice text-12 h-0 flex gap-5 j-content-end w-full pt-12 pb-12 text-danger', {
        'hidden!': !hasError,
      })}
    >
      <Icon name="alert-circle" className="w-14 a-self-center" />
      <span className="a-self-center">{renderErrorMessage(errorMessage)}</span>
    </div>
  );
};

export default InputAlert;

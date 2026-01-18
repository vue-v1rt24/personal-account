// Валидация заполненности поля формы
export const hasError = (field: string | null, isSubmitted?: boolean) => {
  if (isSubmitted === false || isSubmitted === true) {
    return isSubmitted && !field;
  }

  return !field;
};

// Валидация полей формы
export const isFormValid = <T extends object>(form: T) => Object.values(form).every(Boolean);

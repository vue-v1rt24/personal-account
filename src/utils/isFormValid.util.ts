export const isFormValid = <T extends object>(form: T) => Object.values(form).every(Boolean);

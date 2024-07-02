export type HttpError = {
  err: { message: string };
};

export const httpError: HttpError = {
  err: { message: 'Network response was not ok' },
};

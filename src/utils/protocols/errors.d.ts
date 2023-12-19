type ErrorMessage = { message: string };

export type ErrorCodes = { [code: number]: ErrorMessage };

interface AppError extends ErrorMessage {
  code: number;
}
export default AppError;

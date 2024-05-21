export default interface IResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
  error?: string;
}

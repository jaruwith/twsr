import { Constants } from "./Constants";

export interface IServiceResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}

export class ServiceResponse<T> implements IServiceResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
  constructor() {
    this.code = Constants.SERVER_ERROR;
    this.success = false;
    this.message = "";
    this.data = null as any;
  }
}

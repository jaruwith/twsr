import { IServiceResponse } from "../../util/ServiceResponse";
import { ICategoryModel } from "./model/INostraResponseModel";

export default interface INostraService {
  getCategory(): Promise<IServiceResponse<ICategoryModel>>;
}

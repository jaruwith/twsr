import INostraService from "./INostraService";
import { IResponse, ICategoryModel } from "./model/INostraResponseModel";
import { AxiosInstance, AxiosResponse } from "axios";
import { IServiceResponse, ServiceResponse } from "../../util/ServiceResponse";
import { Constants } from "../../util/Constants";
import { CreateAxiosInstance } from "../../util/AxiosHandler";
import * as dotenv from "dotenv";
dotenv.config();

class NostraService implements INostraService {
  private apiKey: string;
  private axiosHandler: AxiosInstance;

  constructor() {
    this.apiKey = process.env.API_KEY ? process.env.API_KEY : "";
    this.axiosHandler = CreateAxiosInstance();
  }

  getCategory = async (): Promise<IServiceResponse<ICategoryModel>> => {
    var response: IServiceResponse<any> = new ServiceResponse();

    try {
      var result: AxiosResponse<IResponse<ICategoryModel[]>> =
        await this.axiosHandler.request({
          method: "GET",
          url: `V2/GeoLocation/QueryCategory`,
          params: { key: this.apiKey },
        });

      response.success = true;
      response.code = Constants.HTTP_OK;
      response.data = result.data.results;
    } catch (error: any) {
      response.message = error.message;
    }

    return response;
  };
}

export default new NostraService();

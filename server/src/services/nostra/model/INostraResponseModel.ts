export interface IResponse<T> {
  errorMessage: string;
  results: T;
}

export interface ICategoryModel {
  CatCode: string;
  NameT: string;
  NameE: string;
}

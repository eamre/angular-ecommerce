import { IProduct } from "./product";

export interface IGeneralProduct {
  data: IProduct[];
  success: boolean;
  message: string;
}

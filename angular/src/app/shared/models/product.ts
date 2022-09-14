export interface IProduct {
  id: number;
  productName: string;
  productDescription: string;
  categoryId: number;
  brandId: number;
  colorId: number;
  kullanımDurumuId: number;
  price: number;
  offerOption: boolean;
  isSold: boolean;
  imgUrl:string
}

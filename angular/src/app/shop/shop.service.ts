import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICategory } from '../shared/models/category';
import { CategoryAdd } from '../shared/models/categoryadd';
import { IGeneralCategory } from '../shared/models/generalcategory';
import { IGeneralProduct } from '../shared/models/generalproduct';
import { IProduct } from '../shared/models/product';
import { ProductAdd } from '../shared/models/productadd';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<IGeneralProduct>(this.baseUrl + 'Product/getall');
  }

  getProductsFilter(categoryId?: number) {
    let params = new HttpParams();

    if (categoryId) {
      params = params.append('catId', categoryId.toString());
    }

    return this.http.get<IGeneralProduct>(this.baseUrl + 'Product/getdetail?', {
      observe: 'response',
      params,
    }).pipe(map(response=>{return response.body}));
  }

  getProductById(id:number){
    return this.http.get<IGeneralProduct>(this.baseUrl+"Product/GetById?Id="+id)
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.baseUrl + 'Category');
  }

  productAdd(product:ProductAdd){
    return this.http.post(this.baseUrl+"Product/add",product)
  }
  categoryAdd(category:CategoryAdd){
    return this.http.post(this.baseUrl+"Category/add",category)
  }
}

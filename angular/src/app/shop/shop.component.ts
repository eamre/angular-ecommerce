import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  categories: ICategory[];
  categoryIdSelected: number;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProductsFilter();
    this.getProducts();
  }
  getProducts() {
    this.shopService.getProducts().subscribe((response) => {
      this.products = response.data;
    },(error) => {
      console.log(error);
    });
  }
  getProductsFilter() {
    this.shopService.getProductsFilter(this.categoryIdSelected).subscribe(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCategorySelected(categoryId: number) {
    this.categoryIdSelected = categoryId;
    this.getProductsFilter();
  }

  getCategories() {
    this.shopService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from '../shop.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
      kullanımDurumuId: ['', Validators.required],
       offerOption: ['', Validators.required],
      // isSold: ['', Validators.required],
      imgUrl: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.shopService.productAdd(productModel).subscribe(data=>{
        console.log(data);
          this.toastrService.success("ürün eklendi")
      });
    } else {
      this.toastrService.error('formunuz eksik');
    }
  }
}

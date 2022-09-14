import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private shopService: ShopService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCategoryAddForm()
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required],
    });
  }

  addCategory() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.shopService.categoryAdd(categoryModel).subscribe(data=>{
        console.log(data);
          this.toastrService.success("category eklendi")
      });
    } else {
      this.toastrService.error('formunuz eksik');
    }
  }
}

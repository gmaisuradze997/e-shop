import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriesService, Category } from '@e-shop/products';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  display = false;

  categories: Category[] = [];


  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCancel(display: boolean) {
    this.display = display;
  }

  onSubmit(categoryForm: FormGroup) {
    console.log(categoryForm);
  }

}

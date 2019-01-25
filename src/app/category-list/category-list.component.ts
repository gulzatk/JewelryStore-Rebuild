import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent  {
 @Input() childCategoryList: Category[];

// masterCategoryList: Category[] = [
//   new Category('Engagement&Wedding'),
//   new Category('Rings'),
//   new Category('Neckleces'),
//   new Category('Earings'),
//   new Category('Bracelets')
// ];

}

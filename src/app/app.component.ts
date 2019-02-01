import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZALES';
  subtitle = 'THE DIAMOND STORE'

  masterCategoryList: Category[] = [
    new Category('Engagement&Wedding'),
    new Category('Rings'),
    new Category('Neckleces'),
    new Category('Earings'),
    new Category('Bracelets')
  ];


}

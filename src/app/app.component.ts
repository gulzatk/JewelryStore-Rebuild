import { Component } from '@angular/core';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zales';
  subtitle = 'diamond store!'

  masterCategoryList: Category[] = [
    new Category('Engagement&Wedding'),
    new Category('Rings'),
    new Category('Neckleces'),
    new Category('Earings'),
    new Category('Bracelets')
  ];
}

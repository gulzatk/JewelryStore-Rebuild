import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Item } from './models/item.model';

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

  masterItemList: Item[] = [
    new Item('Yello&White elegant and colorful diamond engagement ring.', 5129, 'gold'),
    new Item('Diamond Sideways Heard Style Rose Gold ring', 250, 'gold'),
    new Item('1/2 CT. T.W. Journey Diamond Pendant necklece', 900, 'gold'),
    new Item('1/2 CT. T.W. Composite Diamond Flower Stud Earrings', 500, 'gold'),
    new Item ('1/2 CT. T.W. Diamond Frame Art Deco Tennis Bracelet', 470, 'sterling silver')
  ];
}

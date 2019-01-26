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

  masterItemList: Item[] = [
    new Item(1,'Yello&White elegant and colorful diamond engagement ring.', 5129, './assets/images/ring2.jpg','Engagement&Wedding'),
    new Item(2, 'Diamond Sideways Heard Style Rose Gold ring', 250, './assets/images/ring3.jpg', 'Ring'),
    new Item(3, '1/2 CT. T.W. Journey Diamond Pendant necklece', 900, './assets/images/necklece.jpg', 'Necklece'),
    new Item(4, '1/2 CT. T.W. Composite Diamond Flower Stud Earrings', 500, './assets/images/earing.jpg', 'Earing'),
    new Item (5, '1/2 CT. T.W. Diamond Frame Art Deco Tennis Bracelet', 470, './assets/images/bracelet.jpg', 'Bracelet')
  ];
}

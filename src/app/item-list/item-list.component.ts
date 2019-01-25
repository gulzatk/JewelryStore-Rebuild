import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent  {
 @Input() childItemList: Item[];

}

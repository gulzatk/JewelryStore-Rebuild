import { Component, Input } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  @Input() public id: number;
  @Input() public description: string;
  @Input() public price: number;
  @Input() public metal: string;
  @Input() public image: string;

  selectedItem = null;

  

}

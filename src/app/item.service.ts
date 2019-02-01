import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemListComponent } from './item-list/item-list.component';




@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }
}

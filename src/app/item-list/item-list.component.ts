import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  displayDetails(item) {
    item.display = !item.display
  }

}

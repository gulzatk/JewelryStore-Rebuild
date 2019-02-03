import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  category: string;
  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService) {
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.category = (urlParameters['category']);
    });
    console.log("category param value: " + this.category);
    this.items = this.itemService.getItems();
  }

  goToDetailPage(item) {
    this.router.navigate(['items', item.$key]);
  }
}

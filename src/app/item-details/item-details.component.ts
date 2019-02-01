import { Component, OnInit, } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  itemId: string;
  itemToDisplay: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = (urlParameters['id']);
    });

    this.itemService.getItemById(this.itemId).subscribe(dataLastEmittedFromObserver => {
      this.itemToDisplay = new Item(dataLastEmittedFromObserver.description,
        dataLastEmittedFromObserver.price, dataLastEmittedFromObserver.image, dataLastEmittedFromObserver.category,
        dataLastEmittedFromObserver.details)
    })
  }



}

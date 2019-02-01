import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  itemId: number;
  itemToDisplay: Item;
  // @Input() public id: number;
  // @Input() public description: string;
  // @Input() public price: number;
  // @Input() public metal: string;
  // @Input() public image: string;
  // @Input() public category: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = parseInt(urlParameters['id']);
    });

  }



}

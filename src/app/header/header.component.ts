import { Component, OnInit, } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
}

import { Component, OnInit } from '@angular/core';
import { item} from '../item.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  items:item[]=[new item ('production',500),
  new item ('production',500),
  new item ('production',500),
  new item ('production',500)];
  
  constructor() { }

  ngOnInit() {
  }

}

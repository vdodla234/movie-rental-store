import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  featureevent= new EventEmitter<string> ();
  

  constructor() { }

  ngOnInit() {
  }
  onselect(feature:string){
    this.featureevent.emit(feature);

  }
}

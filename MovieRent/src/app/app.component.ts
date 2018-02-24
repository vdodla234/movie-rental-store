import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature;
  title = 'app';
  onselected(feature: String){
    this.loadedfeature=feature;

  }
}

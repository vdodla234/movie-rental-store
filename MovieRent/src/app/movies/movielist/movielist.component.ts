import { Component, OnInit } from '@angular/core';
import { movie } from '../movie.model';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies:movie[]=[new movie('villaian','a simple story','https://www.newsfolo.com/wp-content/uploads/2017/07/C_eCKmHXYAAXR_n.jpg',2017,3,'adult supervision','psycho'),
  new movie('villaian','a simple story','https://www.newsfolo.com/wp-content/uploads/2017/07/C_eCKmHXYAAXR_n.jpg',2017,3,'adult supervision','psycho'),
  new movie('villaian','a simple story','https://www.newsfolo.com/wp-content/uploads/2017/07/C_eCKmHXYAAXR_n.jpg',2017,3,'adult supervision','psycho'),
  new movie('villaian','a simple story','https://www.newsfolo.com/wp-content/uploads/2017/07/C_eCKmHXYAAXR_n.jpg',2017,3,'adult supervision','psycho')]

  constructor() { }

  ngOnInit() {
  }

}

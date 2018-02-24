import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './movies/movielist/movielist.component';
import { MoviedetailComponent } from './movies/moviedetail/moviedetail.component';
import { MovieitemComponent } from './movies/movielist/movieitem/movieitem.component';
import { ShoppinComponent } from './shoppin/shoppin.component';
import { ShoppinglistComponent } from './shoppin/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppin/shoppinglist/shoppingedit/shoppingedit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    MoviesComponent,
    MovielistComponent,
  
    MoviedetailComponent,
    MovieitemComponent,
    ShoppinComponent,
    ShoppinglistComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Replace} from './True_to_Dostepny';
import {_Replace} from './False_to_Niedostepny';
import { FilterPipe } from './filter.pipe';
import { FinalComponent } from './final/final.component';
import {ListComedy} from './list/list.comedy.component';
import {ListAdventure} from './list/list.adventure.component';
import {ListScifi} from './list/list.scifi.component';
import {ListFantasy} from './list/list.fantasy.component';







@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent,
    OrderComponent,
    ListAdventure,
    ListComedy,
    ListScifi,
    ListFantasy,
    Replace,
    _Replace,
    FilterPipe,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

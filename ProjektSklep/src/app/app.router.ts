import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {OrderComponent} from './order/order.component';

import {ListComponent} from './list/list.component';
import {ListComedy} from './list/list.comedy.component';
import {ListAdventure} from './list/list.adventure.component';
import {ListScifi} from './list/list.scifi.component';
import {ListFantasy} from './list/list.fantasy.component';


import {FinalComponent} from './final/final.component';


export const router: Routes = [
    {path:'about',component:AboutComponent},
    {path:'order',component:OrderComponent},
    {path:'list',component:ListComponent},
    {path:'list:fantasy',component:ListFantasy},
    {path:'list:adventure',component:ListAdventure},
    {path:'list:sciFi',component:ListScifi},
    {path:'list:scifi',component:ListScifi},
    {path:'list:comedy',component:ListComedy},
    {path: 'final', component:FinalComponent}


];ListComponent

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
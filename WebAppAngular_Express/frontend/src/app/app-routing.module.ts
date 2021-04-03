import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {DetailComponent} from "./detail/detail.component";
import {DetailTVComponent} from "./detail-tv/detail-tv.component"
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'watch/movie/:id',
    component: DetailComponent
  },
  {
    path: 'watch/tv/:id',
    component: DetailTVComponent
  },
  {
    path: 'mylist',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

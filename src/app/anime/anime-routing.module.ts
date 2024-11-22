import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  {path : ':id', component: AnimeDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
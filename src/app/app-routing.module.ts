import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calender', loadChildren: './pages/calender/calender.module#CalenderPageModule' },
  { path: 'science', loadChildren: './pages/science/science.module#SciencePageModule' },
  { path: 'animal', loadChildren: './pages/animal/animal.module#AnimalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FootballComponent} from './football/football.component';
import {ScratchPadComponent} from './scratch-pad/scratch-pad.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'Home' } },
  { path: 'about', component: AboutComponent, data: { label: 'About' } },
    {path: 'football', component: FootballComponent, data: { label: 'Football' } },
    {path: 'scratchPad', component: ScratchPadComponent, data: { label: 'ScratchPad' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const routeOptions: ExtraOptions = {
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

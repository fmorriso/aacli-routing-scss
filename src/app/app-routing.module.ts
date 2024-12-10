import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
//
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FootballComponent} from './football/football.component';
import {ScratchPadComponent} from './scratch-pad/scratch-pad.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'football', component: FootballComponent, title: 'Football'},
    {path: 'scratchPad', component: ScratchPadComponent, title: 'Scratch-Pad'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

const routeOptions: ExtraOptions = {
    enableTracing: false
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routeOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

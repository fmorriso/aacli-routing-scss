# aaCLIRoutingScss

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

It is designed to support Angular routing, with two sample routes defined plus a page not found (404) handler.
I have turned on route tracking via Angular's ExtraOptions feature.
A snippet of the relevant code is shown below:

```typescript
const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'Home' } },
  { path: 'about', component: AboutComponent, data: { label: 'About' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
```

It is also designed to use SCSS for styling.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

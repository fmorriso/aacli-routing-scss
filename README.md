# aaCLI-Routing-Scss

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

* It is designed to support Angular routing, with two sample routes defined plus a page not found (404) handler.
* I have turned on route tracking via Angular's ExtraOptions feature.
* A snippet of the relevant code is shown below:
## Developer Notes
* Note: to avoid error TS2322, I had to change the following from this:
    ```typescript
    [ngClass]="inactive-route"   [routerLink]="link.path"
    ```
    to this:
    ```typescript
    [ngClass]="'inactive-route'"   [routerLink]="link.path"
    ```
    Notice the extra single quotes inside the double quotes


    
## @angular/flex-layout DEPRECATION notes
* [Modern CSS in Angular: Layouts](https://blog.angular.io/modern-css-in-angular-layouts-4a259dca9127)
* [Flexbox with Angular demo](https://stackblitz.com/edit/angular-cssflex?file=src/main.ts)
* [CSS Grid with Angular demo](https://stackblitz.com/edit/angular-modern-cssgrid?file=src%2Fmain.ts)
## routes
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

## Tools Used

| Tool             |  Version |
|:-----------------|---------:|
| @Angular/CLI     |   19.1.2 |
| Angular          |   19.1.1 |
| Angular/Material |   19.1.0 |
| WebStorm         | 2024.3.2 |
| VSCode           |   1.96.3 |

## Change History

| Date       | Description                                                                                        |
|:-----------|:---------------------------------------------------------------------------------------------------|
| 2022-09-17 | updated to Angular 14.2.2                                                                          |
| 2022-10-19 | updated to Angular 14.2.7                                                                          |
| 2022-10-31 | updated to Angular 14.2.8                                                                          |
| 2022-11-03 | updated to Angular 14.2.9                                                                          |
| 2023-04-06 | updated to Angular 15.2.5                                                                          |
| 2022-07-05 | upgraded to Angular 14.0.4 with corresponding updates to Angular Material and Angular Flex-Layout. |
| 2023-05-15 | updated to Angular 15.2.7                                                                          |
| 2023-06-13 | updated to Angular 16.1                                                                            |
| 2023-07-01 | updated to Angular 16.1.3                                                                          |
| 2023-08-19 | updated to Angular 16.2.1                                                                          |
| 2023-09-01 | updated to Angular 16.2.3                                                                          |
| 2024-11-10 | Initial creation                                                                                   |
| 2024-11-13 | Verify code runs in WebStorm 2024.3.0                                                              |
| 2024-11-30 | Upgrade to Angular 19 and Angular/Material 19                                                      |
| 2024-12-09 | Upgrade to Angular 19.0.3  and Angular/Material 19.0.2                                             |
| 2024-12-10 | Convert from custom data dictionary to built-in title attribute for navigation bar labels          |
| 2024-12-19 | Upgrade to latest Angular, Angular/Material                                                        |
| 2025-01-19 | Upgrade to latest Angular 19.1, Angular/Material 19.1                                              |


## Known Issues

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

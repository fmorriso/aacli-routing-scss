# aaCLI-Routing-Scss

A basic Angular project generated by @angular/cli.

## Tools Used

| Tool             |  Version |
|:-----------------|---------:|
| @Angular/CLI     |   19.2.4 |
| Angular          |   19.2.3 |
| Angular/Material |   19.2.6 |
| node             |  22.14.0 |
| npm              |   11.2.0 |
| WebStorm         | 2024.3.5 |
| VSCode           |   1.98.0 |

## Change History

| Date       | Description                                                               |
|:-----------|:--------------------------------------------------------------------------|
| 2018-12-20 | Initial commit                                                            |
| 2019-02-17 | upgrade to Angular 7.2.5                                                  |
| 2019-06-20 | upgrade to Angular 8.0.2                                                  |
| 2020-03-12 | upgrade to Angular 9.0.6                                                  |
| 2020-08-04 | upgrade to Angular 10.0.5                                                 |
| 2021-04-03 | upgrade to Angular 11                                                     |
| 2021-05-28 | upgrade to Angular 12.0.2                                                 |
| 2021-11-22 | upgrade to Angular 13.0.2                                                 |
| 2022-09-17 | updated to Angular 14.2.2                                                 |
| 2022-10-19 | updated to Angular 14.2.7                                                 |
| 2022-10-31 | updated to Angular 14.2.8                                                 |
| 2022-11-03 | updated to Angular 14.2.9                                                 |
| 2023-04-06 | updated to Angular 15.2.5                                                 |
| 2022-07-05 | upgraded to Angular 14.0.4                                                |
| 2023-05-15 | updated to Angular 15.2.7                                                 |
| 2023-06-13 | updated to Angular 16.1                                                   |
| 2023-07-01 | updated to Angular 16.1.3                                                 |
| 2023-08-19 | updated to Angular 16.2.1                                                 |
| 2023-09-01 | updated to Angular 16.2.3                                                 |
| 2024-11-13 | Verify code runs in WebStorm 2024.3.0                                     |
| 2024-11-30 | Upgrade to Angular 19 and Angular/Material 19                             |
| 2024-12-09 | Upgrade to Angular 19.0.3  and Angular/Material 19.0.2                    |
| 2024-12-10 | Convert to built-in title attribute for navigation bar labels             |
| 2024-12-19 | Upgrade to latest Angular, Angular/Material                               |
| 2025-01-19 | Upgrade to latest Angular 19.1, Angular/Material 19.1                     |
| 2025-01-28 | Upgrade to latest Angular 19.1.4, Angular 19.1.3, Angular/Material 19.1.1 |
| 2025-02-13 | Upgrade to Angular/CLI 19.1.7, Angular 19.1.6, Angular/Material 19.1.4    |
| 2025-03-13 | Upgrade to Angular/CLI 19.2.3, Angular 19.2.2, Angular/Material 19.2.3    |
| 2025-03-25 | Upgrade to Angular/CLI 19.2.4, Angular 19.2.3, Angular/Material 19.2.6    |
| 2025-03-27 | Upgrade to Angular/CLI 19.2.5, Angular 19.2.4, Angular/Material 19.2.7    |

## References

* [Angular](https://angular.dev/overview)
* [Angular Material](https://material.angular.io/)

## Angular/CLI

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

```angular
const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
const routeOptions: ExtraOptions = {
    enableTracing: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routeOptions)]
```

It is also designed to use SCSS for styling.

## Known Issues

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

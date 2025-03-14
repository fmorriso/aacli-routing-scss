import { Component, VERSION } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'aacli-routing-scss';
  angularVersion: string;

  constructor() {
    this.angularVersion = VERSION.full;
  }
}

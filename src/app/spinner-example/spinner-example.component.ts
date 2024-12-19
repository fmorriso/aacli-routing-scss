import { Component } from '@angular/core';
//
import {MatMenu, MatMenuItem, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-spinner-example',
    imports: [
        MatButtonModule,
        MatButtonModule,
        MatMenuModule,
        MatMenuTrigger,
        MatMenuItem,
        MatMenu,
        MatInput
    ],
  templateUrl: './spinner-example.component.html',
  styleUrl: './spinner-example.component.scss'
})
export class SpinnerExampleComponent {

}

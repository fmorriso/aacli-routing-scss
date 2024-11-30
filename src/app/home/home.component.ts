import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee/employee';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log(Employee.defaultName);
      let emp: Employee = new Employee(123);
      console.log(emp.getEmployeeId);
  }

}

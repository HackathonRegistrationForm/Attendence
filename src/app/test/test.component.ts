import { Component, OnInit } from '@angular/core';

import {DataTablesModule} from 'angular-datatables';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ngOnInit(): void {

  }

  prepareRoute() {
    return {
      value: 'always' + Math.random() * 16,
      params: {},
    };
};
}





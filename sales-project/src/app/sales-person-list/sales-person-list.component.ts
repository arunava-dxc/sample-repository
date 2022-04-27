import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './SalesPerson';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesPersonList : SalesPerson[] = [ 
    new SalesPerson("Rakesh","Kumar","rakesh@dxc.com",50000),
    new SalesPerson("Sourav","Mondol","sourav@dxc.com",40000),
    new SalesPerson("Brijesh","Kumar","brijesh@dxc.com",50000),
    new SalesPerson("Ujjwal","Gorai","ujjwal@dxc.com",70000),
    new SalesPerson("Prabhakar","Anand","prabhakar@dxc.com",20000),
    new SalesPerson("Mrinal","Thakur","mrinal@dxc.com",30000)
  ];
}

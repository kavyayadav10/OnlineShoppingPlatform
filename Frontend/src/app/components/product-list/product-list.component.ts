
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-product-list',
 templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{

 products:any[]=[
   {name:'Laptop',price:50000,description:'Gaming Laptop'},
   {name:'Phone',price:20000,description:'Android Phone'}
 ];

 ngOnInit(){}
}

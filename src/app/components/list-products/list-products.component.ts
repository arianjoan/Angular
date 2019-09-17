import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input()
  products = [];

  constructor() { }

  ngOnInit() {
  }

  remover(product){
    this.products.splice(this.products.indexOf(product),1);
  }

}

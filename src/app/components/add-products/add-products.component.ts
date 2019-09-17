import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  @Input('ngModel')
  nameProduct;
  @Input('ngModel')
  descriptionProduct;
  @Input('ngModel')
  stockProduct;
  @Input('ngModel')
  idProduct;
  @Input('ngModel')
  priceProduct;
  @Input('ngModel')
  photoProduct;
  @Input()
  products = [];

  constructor() { }

  ngOnInit() {
  }

  setearForm(){
    var product = new Product();
    product.name = this.nameProduct;
    product.description = this.descriptionProduct;
    product.id = this.idProduct;
    product.stock = this.stockProduct;
    product.img = (this.photoProduct == '' || typeof this.photoProduct === 'undefined') ? '../../assets/noimage.jpg' : '../../assets/' + this.photoProduct;
    product.price = this.priceProduct;
    this.products.push(product);
  }

}

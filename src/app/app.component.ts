import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  products = [];
  carrito = [];

  constructor(){
    this.createEnviroment();
  }

  agregarAlCarrito(product){

    if (this.carrito.findIndex(p => p === product) != -1){
      product.sales++;
    }else{
      this.carrito.push(product);
    }
    
  }

  borrarDelCarrito(product){
    var indexOfProduct = this.carrito.findIndex(p => p === product);
    if (this.carrito[indexOfProduct].sales == 1){
      this.carrito.splice(indexOfProduct,1);
    }else{
      this.carrito[indexOfProduct].sales --;
    }
  }

  checkOut(){
    alert('Su compra es de ' + this.getTotal() + 'pesos');
  }

  getTotal(){

    var total = 0;
    this.carrito.forEach(e => {
      total = total + e.price * e.sales;
    });
    return total;
  }

  createEnviroment(){

    var namesOfProducts = ['Zapatillas Nike','Remera Lacoste','Jeans hombre','Gorra DC','Medias Elemento','Pulover Rojo'];
    var descriptionsOfProducts = ['Las mejores zapatillas de running','La del Cocodrilo','Mas achupinados que el fan de wanda','3 en 1, Tapa el sol, las nubes y la luna','Para dormir con medias','Clavaste pulover'];
    var pricesOfProducts = [8500,3000,250,350,490,1300];
    var stocksOfProducts = [9,16,8,24,48,25];
    var salesOfProducts = 1;
    var imgsOfProducts = ['shoe.jpeg','tshirt.jpeg','jeans.jpeg','hat.jpg','socks.jpg','shirt.jpg'];

    for (let i=0; i<6 ; i++ ){
      var product = new Product();
      product.name = namesOfProducts[i];
      product.description = descriptionsOfProducts[i];
      product.price = pricesOfProducts[i];
      product.stock = stocksOfProducts[i];
      product.id = i;
      product.img = imgsOfProducts[i];
      product.sales = 1;

      this.products.push(product);
    }
  }
}

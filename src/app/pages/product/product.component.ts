import { Component, OnInit } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-services.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productHttpService: ProductHttpServiceService) { }


  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }


  getProducts(): void {
    const response = this.productHttpService.getAll().subscribe
      (response => {
        console.log(response);
      });
  }


  getProduct() {
    const response = this.productHttpService.getOne(1).subscribe
      (response => {
        console.log(response);
      });
  }


  createProduct() {
    const data = {
      title: "Licras",
      price: 10,
      description: "Ropa / Andres",
      images: ["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId: 1
    }
    this.productHttpService.store(data).subscribe(
      response => {
        console.log(response);
      }
    );
  }


  updateProduct() {
    const data = {
      title: "pantalones",
      price: 35,
      description: "Ropa Deportiva / Andres",
      images: ["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId: 1
    }
    this.productHttpService.update( 120 ,data).subscribe(
      response => {
        console.log(response);
      }
    );
  }


  deleteProduct() {
    this.productHttpService.destroy(1).subscribe
      (response => { console.log(response); });
  }
}





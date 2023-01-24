import { Component, OnInit } from '@angular/core';
import { AuthorHttpServiceService } from 'src/app/services/author.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent { httpClient:any;
  constructor(private authorHttpService: AuthorHttpServiceService) { }
  ngOnInit(): void {
    //this.getAuthors();
    //this.getAuthor();
    this.createAuthor();
    //this.updateAuthor();
    //this.deleteAuthor();
  }
  getAuthors(): void {
    const response = this.authorHttpService.getAuthor().subscribe
      (response => {
        console.log(response);
      });
  }
  getAuthor() {
    const response = this.authorHttpService.getOneAuthor(1).subscribe
      (response => {
        console.log(response);
      });
  }
  createAuthor() {
    const data = {
      name: "Andres Montoya",
      image: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
      categoryId: 1
    }
    this.authorHttpService.storeAuthor(data).subscribe(
      response => {
        console.log(response);
      }
    );
  }
  updateAuthor() {
    const data = {
      name: "Andres Montoya",
      image: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
      categoryId: 1
    }
    this.authorHttpService.storeAuthor(data).subscribe(
      response => {
        console.log(response);
      }
    );
  }
  deleteAuthor() {
  this.authorHttpService.destroyAuthor(1).subscribe
  (response => { console.log(response); });
  }
}


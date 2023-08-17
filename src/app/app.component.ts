import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-clothes-shop';
  loading = false;
  products!: IProduct[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe( products => { 
      this.products = products;
      this.loading = false;
    });
  }
}

import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { products  as productsData} from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-clothes-shop';

  products: IProduct[] = productsData;
}

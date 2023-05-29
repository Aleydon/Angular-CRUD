import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    price: 0.0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product Created');
      this.router.navigate(['/products']);
    });
  }

  cancelProductCreate(): void {
    this.router.navigate(['/products']);
  }
}

import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  constructor(private matSnackBar: ProductService) {}

  createProduct(): void {
    this.matSnackBar.showMessage('Product Created');
  }

  cancelProductCreate(): void {
    this.matSnackBar.showMessage('Cancel...');
  }
}

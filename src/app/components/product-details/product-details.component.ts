import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your products has been added to cart');
  }

  changeBtn() {
    alert('i am clicked');
  }

  constructor(private route:ActivatedRoute, private cartService: CartService) { }

  product: Product | undefined ;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}

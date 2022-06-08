import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { 
  }
  shippingCost = this.cartService.getShippingPrice();

  ngOnInit(): void {
  }

}

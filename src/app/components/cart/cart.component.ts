import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message = '';

  Reset() {
    this.items = this.cartService.clearCart();
  }

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });



  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.message = 'Your order has been submitted';
    this.checkoutForm.reset()
    
  }


  ngOnInit(): void {
  }

}

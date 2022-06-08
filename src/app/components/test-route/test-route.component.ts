import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
// import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.css']
})
export class TestRouteComponent implements OnInit {
  products = products;

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sales');
  }

  constructor() { }

  ngOnInit(): void {
  }

}

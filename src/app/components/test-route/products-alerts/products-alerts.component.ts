import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../products';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

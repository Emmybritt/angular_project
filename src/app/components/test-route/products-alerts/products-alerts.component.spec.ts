import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAlertsComponent } from './products-alerts.component';

describe('ProductsAlertsComponent', () => {
  let component: ProductsAlertsComponent;
  let fixture: ComponentFixture<ProductsAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteComponent } from './test-route.component';

describe('TestRouteComponent', () => {
  let component: TestRouteComponent;
  let fixture: ComponentFixture<TestRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketsFormComponent } from './buy-tickets-form.component';

describe('BuyTicketsFormComponent', () => {
  let component: BuyTicketsFormComponent;
  let fixture: ComponentFixture<BuyTicketsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTicketsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTicketsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

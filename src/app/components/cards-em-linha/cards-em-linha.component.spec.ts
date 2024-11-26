import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEmLinhaComponent } from './cards-em-linha.component';

describe('CardsEmLinhaComponent', () => {
  let component: CardsEmLinhaComponent;
  let fixture: ComponentFixture<CardsEmLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsEmLinhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEmLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

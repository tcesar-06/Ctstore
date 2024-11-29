import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueNbaComponent } from './estoque-nba.component';

describe('EstoqueNbaComponent', () => {
  let component: EstoqueNbaComponent;
  let fixture: ComponentFixture<EstoqueNbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueNbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueNbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

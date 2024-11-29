import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueInfantilComponent } from './estoque-infantil.component';

describe('EstoqueInfantilComponent', () => {
  let component: EstoqueInfantilComponent;
  let fixture: ComponentFixture<EstoqueInfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueInfantilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

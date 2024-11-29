import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueShortComponent } from './estoque-short.component';

describe('EstoqueShortComponent', () => {
  let component: EstoqueShortComponent;
  let fixture: ComponentFixture<EstoqueShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

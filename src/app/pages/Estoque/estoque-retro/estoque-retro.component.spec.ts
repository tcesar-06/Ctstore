import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueRetroComponent } from './estoque-retro.component';

describe('EstoqueRetroComponent', () => {
  let component: EstoqueRetroComponent;
  let fixture: ComponentFixture<EstoqueRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueRetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

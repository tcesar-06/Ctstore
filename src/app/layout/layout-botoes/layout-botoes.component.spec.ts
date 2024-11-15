import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBotoesComponent } from './layout-botoes.component';

describe('LayoutBotoesComponent', () => {
  let component: LayoutBotoesComponent;
  let fixture: ComponentFixture<LayoutBotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBotoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

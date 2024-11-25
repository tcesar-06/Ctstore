import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEstoqueComponent } from './layout-estoque.component';

describe('LayoutEstoqueComponent', () => {
  let component: LayoutEstoqueComponent;
  let fixture: ComponentFixture<LayoutEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutEstoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

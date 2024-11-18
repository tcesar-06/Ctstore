import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContasExtComponent } from './layout-contas-ext.component';

describe('LayoutContasExtComponent', () => {
  let component: LayoutContasExtComponent;
  let fixture: ComponentFixture<LayoutContasExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutContasExtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutContasExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

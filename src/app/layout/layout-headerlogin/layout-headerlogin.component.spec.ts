import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderloginComponent } from './layout-headerlogin.component';

describe('LayoutHeaderloginComponent', () => {
  let component: LayoutHeaderloginComponent;
  let fixture: ComponentFixture<LayoutHeaderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHeaderloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutHeaderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

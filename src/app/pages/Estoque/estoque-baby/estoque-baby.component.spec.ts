import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueBabyComponent } from './estoque-baby.component';

describe('EstoqueBabyComponent', () => {
  let component: EstoqueBabyComponent;
  let fixture: ComponentFixture<EstoqueBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueBabyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

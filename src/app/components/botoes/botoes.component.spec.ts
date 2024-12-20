import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesComponent } from './botoes.component';

describe('BotoesComponent', () => {
  let component: BotoesComponent;
  let fixture: ComponentFixture<BotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

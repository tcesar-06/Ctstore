import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueTorcedorComponent } from './estoque-torcedor.component';

describe('EstoqueTorcedorComponent', () => {
  let component: EstoqueTorcedorComponent;
  let fixture: ComponentFixture<EstoqueTorcedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueTorcedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueTorcedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

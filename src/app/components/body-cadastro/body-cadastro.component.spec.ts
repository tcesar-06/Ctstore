import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCadastroComponent } from './body-cadastro.component';

describe('BodyCadastroComponent', () => {
  let component: BodyCadastroComponent;
  let fixture: ComponentFixture<BodyCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

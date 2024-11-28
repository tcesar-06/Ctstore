import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueJogadorComponent } from './estoque-jogador.component';

describe('EstoqueJogadorComponent', () => {
  let component: EstoqueJogadorComponent;
  let fixture: ComponentFixture<EstoqueJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

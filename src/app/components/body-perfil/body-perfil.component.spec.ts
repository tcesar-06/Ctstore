import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPerfilComponent } from './body-perfil.component';

describe('BodyPerfilComponent', () => {
  let component: BodyPerfilComponent;
  let fixture: ComponentFixture<BodyPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

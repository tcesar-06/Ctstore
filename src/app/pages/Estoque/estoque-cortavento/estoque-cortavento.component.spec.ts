import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCortaventoComponent } from './estoque-cortavento.component';

describe('EstoqueCortaventoComponent', () => {
  let component: EstoqueCortaventoComponent;
  let fixture: ComponentFixture<EstoqueCortaventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueCortaventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueCortaventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

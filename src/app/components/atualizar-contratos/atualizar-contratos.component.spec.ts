import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarContratosComponent } from './atualizar-contratos.component';

describe('AtualizarContratosComponent', () => {
  let component: AtualizarContratosComponent;
  let fixture: ComponentFixture<AtualizarContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarContratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

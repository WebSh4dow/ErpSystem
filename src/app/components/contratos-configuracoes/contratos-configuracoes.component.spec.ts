import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosConfiguracoesComponent } from './contratos-configuracoes.component';

describe('ContratosConfiguracoesComponent', () => {
  let component: ContratosConfiguracoesComponent;
  let fixture: ComponentFixture<ContratosConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosConfiguracoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

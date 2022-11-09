import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasConfiguracoesComponent } from './caixas-configuracoes.component';

describe('CaixasConfiguracoesComponent', () => {
  let component: CaixasConfiguracoesComponent;
  let fixture: ComponentFixture<CaixasConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixasConfiguracoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixasConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

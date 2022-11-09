import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConfiguracoesComponent } from './cliente-configuracoes.component';

describe('ClienteConfiguracoesComponent', () => {
  let component: ClienteConfiguracoesComponent;
  let fixture: ComponentFixture<ClienteConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteConfiguracoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

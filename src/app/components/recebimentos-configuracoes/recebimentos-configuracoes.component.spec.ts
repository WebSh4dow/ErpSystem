import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosConfiguracoesComponent } from './recebimentos-configuracoes.component';

describe('RecebimentosConfiguracoesComponent', () => {
  let component: RecebimentosConfiguracoesComponent;
  let fixture: ComponentFixture<RecebimentosConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebimentosConfiguracoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecebimentosConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

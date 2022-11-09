import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoesComponent } from './impressoes.component';

describe('ImpressoesComponent', () => {
  let component: ImpressoesComponent;
  let fixture: ComponentFixture<ImpressoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpressoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablecimentosDetalhePage } from './establecimentos-detalhe.page';

describe('EstablecimentosDetalhePage', () => {
  let component: EstablecimentosDetalhePage;
  let fixture: ComponentFixture<EstablecimentosDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstablecimentosDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

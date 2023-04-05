import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablecimentosPage } from './establecimentos.page';

describe('EstablecimentosPage', () => {
  let component: EstablecimentosPage;
  let fixture: ComponentFixture<EstablecimentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstablecimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

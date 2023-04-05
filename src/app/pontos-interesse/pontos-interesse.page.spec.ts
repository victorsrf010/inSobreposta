import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontosInteressePage } from './pontos-interesse.page';

describe('PontosInteressePage', () => {
  let component: PontosInteressePage;
  let fixture: ComponentFixture<PontosInteressePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PontosInteressePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTarjetaBuscadosComponent } from './heroes-tarjeta-buscados.component';

describe('HeroesTarjetaBuscadosComponent', () => {
  let component: HeroesTarjetaBuscadosComponent;
  let fixture: ComponentFixture<HeroesTarjetaBuscadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTarjetaBuscadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTarjetaBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

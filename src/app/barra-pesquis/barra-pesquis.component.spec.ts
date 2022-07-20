import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisComponent } from './barra-pesquis.component';

describe('BarraPesquisComponent', () => {
  let component: BarraPesquisComponent;
  let fixture: ComponentFixture<BarraPesquisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPesquisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPesquisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

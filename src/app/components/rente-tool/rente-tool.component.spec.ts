import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenteToolComponent } from './rente-tool.component';

describe('RenteToolComponent', () => {
  let component: RenteToolComponent;
  let fixture: ComponentFixture<RenteToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenteToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

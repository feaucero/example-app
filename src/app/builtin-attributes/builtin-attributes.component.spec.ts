import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinAttributesComponent } from './builtin-attributes.component';

describe('BuiltinAttributesComponent', () => {
  let component: BuiltinAttributesComponent;
  let fixture: ComponentFixture<BuiltinAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

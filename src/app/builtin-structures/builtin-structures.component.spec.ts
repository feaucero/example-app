import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinStructuresComponent } from './builtin-structures.component';

describe('BuiltinStructuresComponent', () => {
  let component: BuiltinStructuresComponent;
  let fixture: ComponentFixture<BuiltinStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinStructuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAnAdminComponent } from './du-an-admin.component';

describe('DuAnAdminComponent', () => {
  let component: DuAnAdminComponent;
  let fixture: ComponentFixture<DuAnAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuAnAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuAnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

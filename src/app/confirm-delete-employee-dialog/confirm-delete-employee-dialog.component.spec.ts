import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteEmployeeDialogComponent } from './confirm-delete-employee-dialog.component';

describe('ConfirmDeleteEmployeeDialogComponent', () => {
  let component: ConfirmDeleteEmployeeDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteEmployeeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteEmployeeDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeleteEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

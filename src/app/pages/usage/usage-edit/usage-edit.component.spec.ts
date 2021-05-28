import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageEditComponent } from './usage-edit.component';

describe('UsageEditComponent', () => {
  let component: UsageEditComponent;
  let fixture: ComponentFixture<UsageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

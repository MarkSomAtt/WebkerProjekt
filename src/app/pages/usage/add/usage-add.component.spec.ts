import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageAddComponent } from './usage-add.component';

describe('UsageAddComponent', () => {
  let component: UsageAddComponent;
  let fixture: ComponentFixture<UsageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

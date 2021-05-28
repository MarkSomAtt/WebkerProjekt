import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageReceivedListComponent } from './usage-received-list.component';

describe('UsageReceivedListComponent', () => {
  let component: UsageReceivedListComponent;
  let fixture: ComponentFixture<UsageReceivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageReceivedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageReceivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

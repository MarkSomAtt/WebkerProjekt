import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageReratedListComponent } from './usage-rerated-list.component';

describe('UsageReratedListComponent', () => {
  let component: UsageReratedListComponent;
  let fixture: ComponentFixture<UsageReratedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageReratedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageReratedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

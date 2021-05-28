import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageRatedListComponent } from './usage-rated-list.component';

describe('UsageRatedListComponent', () => {
  let component: UsageRatedListComponent;
  let fixture: ComponentFixture<UsageRatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageRatedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

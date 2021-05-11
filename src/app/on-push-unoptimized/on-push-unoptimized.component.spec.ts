import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushUnoptimizedComponent } from './on-push-unoptimized.component';

describe('OnPushUnoptimizedComponent', () => {
  let component: OnPushUnoptimizedComponent;
  let fixture: ComponentFixture<OnPushUnoptimizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPushUnoptimizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushUnoptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

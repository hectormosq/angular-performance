import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpuDetailsComponent } from './opu-details.component';

describe('OpuDetailsComponent', () => {
  let component: OpuDetailsComponent;
  let fixture: ComponentFixture<OpuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

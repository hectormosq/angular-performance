import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUnoptimizedComponent } from './general-unoptimized.component';

describe('GeneralUnoptimizedComponent', () => {
  let component: GeneralUnoptimizedComponent;
  let fixture: ComponentFixture<GeneralUnoptimizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralUnoptimizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralUnoptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

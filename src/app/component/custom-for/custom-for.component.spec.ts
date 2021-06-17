import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomForComponent } from './custom-for.component';

describe('CustomForComponent', () => {
  let component: CustomForComponent;
  let fixture: ComponentFixture<CustomForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

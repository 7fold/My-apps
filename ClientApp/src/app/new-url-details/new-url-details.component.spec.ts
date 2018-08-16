import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUrlDetailsComponent } from './new-url-details.component';

describe('NewUrlDetailsComponent', () => {
  let component: NewUrlDetailsComponent;
  let fixture: ComponentFixture<NewUrlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUrlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUrlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

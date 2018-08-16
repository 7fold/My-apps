import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetailedComponent } from './ip-detailed.component';

describe('IpDetailedComponent', () => {
  let component: IpDetailedComponent;
  let fixture: ComponentFixture<IpDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

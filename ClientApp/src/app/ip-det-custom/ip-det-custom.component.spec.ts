import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetCustomComponent } from './ip-det-custom.component';

describe('IpDetCustomComponent', () => {
  let component: IpDetCustomComponent;
  let fixture: ComponentFixture<IpDetCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpDetCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDetCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengsComponent } from './primengs.component';

describe('PrimengsComponent', () => {
  let component: PrimengsComponent;
  let fixture: ComponentFixture<PrimengsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

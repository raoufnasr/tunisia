import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPubComponent } from './full-pub.component';

describe('FullPubComponent', () => {
  let component: FullPubComponent;
  let fixture: ComponentFixture<FullPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

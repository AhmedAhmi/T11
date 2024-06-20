import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { ChildView2Component } from './child-view2.component';

describe('ChildView2Component', () => {
  let component: ChildView2Component;
  let fixture: ComponentFixture<ChildView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildView2Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

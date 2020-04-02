import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { RxGlobalState, RxState } from '@ngx-rx/ngx-rx-state';
import { createStateChecker, PrimitiveState } from './fixtures';

const stateChecker = createStateChecker((actual, expected) => {
  if (typeof expected === 'object') {
    expect(actual).toEqual(expected);
  } else {
    expect(actual).toBe(expected);
  }
});


@Component({
  selector: 'ngx-rx-state-local-provider-test',
  template: `<span>{{value$}}</span>`,
})
export class RxStateInjectionComponent {

  value$ = this.state.select();
  constructor(public state: RxGlobalState<PrimitiveState>) {

  }

}

describe('LocalProviderTestComponent', () => {
  let component: RxStateInjectionComponent;
  let fixture: ComponentFixture<RxStateInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxStateInjectionComponent ],
      providers: [RxGlobalState]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStateInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    stateChecker.checkSubscriptions(component.state, 1);
    (component as any).ngOnDestroy();
    stateChecker.checkSubscriptions(component.state, 1);
  });
});
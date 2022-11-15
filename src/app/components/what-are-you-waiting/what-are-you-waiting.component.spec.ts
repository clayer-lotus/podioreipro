import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreYouWaitingComponent } from './what-are-you-waiting.component';

describe('WhatAreYouWaitingComponent', () => {
  let component: WhatAreYouWaitingComponent;
  let fixture: ComponentFixture<WhatAreYouWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatAreYouWaitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAreYouWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

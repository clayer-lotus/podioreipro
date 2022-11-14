import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSystemOffersComponent } from './what-system-offers.component';

describe('WhatSystemOffersComponent', () => {
  let component: WhatSystemOffersComponent;
  let fixture: ComponentFixture<WhatSystemOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatSystemOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatSystemOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

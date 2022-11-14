import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioreiproAllCrmFeaturesComponent } from './podioreipro-all-crm-features.component';

describe('PodioreiproAllCrmFeaturesComponent', () => {
  let component: PodioreiproAllCrmFeaturesComponent;
  let fixture: ComponentFixture<PodioreiproAllCrmFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodioreiproAllCrmFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodioreiproAllCrmFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

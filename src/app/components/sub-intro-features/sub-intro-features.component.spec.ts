import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIntroFeaturesComponent } from './sub-intro-features.component';

describe('SubIntroFeaturesComponent', () => {
  let component: SubIntroFeaturesComponent;
  let fixture: ComponentFixture<SubIntroFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubIntroFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubIntroFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

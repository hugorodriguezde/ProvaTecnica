import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersDetailComponent } from './photographers-detail.component';

describe('PhotographersDetailComponent', () => {
  let component: PhotographersDetailComponent;
  let fixture: ComponentFixture<PhotographersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographersDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotographersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

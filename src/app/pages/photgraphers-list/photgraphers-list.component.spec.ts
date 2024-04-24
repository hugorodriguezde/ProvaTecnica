import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotgraphersListComponent } from './photgraphers-list.component';

describe('PhotgraphersListComponent', () => {
  let component: PhotgraphersListComponent;
  let fixture: ComponentFixture<PhotgraphersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotgraphersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotgraphersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

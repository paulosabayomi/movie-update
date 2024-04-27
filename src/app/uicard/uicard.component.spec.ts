import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicardComponent } from './uicard.component';

describe('UicardComponent', () => {
  let component: UicardComponent;
  let fixture: ComponentFixture<UicardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UicardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

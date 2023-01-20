import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartComponent } from './getstart.component';

describe('GetstartComponent', () => {
  let component: GetstartComponent;
  let fixture: ComponentFixture<GetstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

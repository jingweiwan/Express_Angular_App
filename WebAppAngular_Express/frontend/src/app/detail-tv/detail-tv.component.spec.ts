import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTVComponent } from './detail-tv.component';

describe('DetailTVComponent', () => {
  let component: DetailTVComponent;
  let fixture: ComponentFixture<DetailTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPhotoComponent } from './feed-photo.component';

describe('FeedPhotoComponent', () => {
  let component: FeedPhotoComponent;
  let fixture: ComponentFixture<FeedPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

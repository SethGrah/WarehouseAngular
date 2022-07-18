import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStorageComponent } from './find-storage.component';

describe('FindStorageComponent', () => {
  let component: FindStorageComponent;
  let fixture: ComponentFixture<FindStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

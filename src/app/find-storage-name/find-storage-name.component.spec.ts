import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStorageNameComponent } from './find-storage-name.component';

describe('FindStorageNameComponent', () => {
  let component: FindStorageNameComponent;
  let fixture: ComponentFixture<FindStorageNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStorageNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStorageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

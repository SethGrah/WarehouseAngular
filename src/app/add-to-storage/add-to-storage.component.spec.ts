import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToStorageComponent } from './add-to-storage.component';

describe('AddToStorageComponent', () => {
  let component: AddToStorageComponent;
  let fixture: ComponentFixture<AddToStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-add-to-storage',
  templateUrl: './add-to-storage.component.html',
  styleUrls: ['./add-to-storage.component.css']
})
export class AddToStorageComponent implements OnInit {
  service: StorageApiService;
  

  constructor(service: StorageApiService) {
    this.service=service;
    
   }

  ngOnInit(): void {
  }
  OnSubmit(){
  }
}

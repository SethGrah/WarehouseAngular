import { Component, OnInit } from '@angular/core';
import { async, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { storageItem } from '../models/storageItem';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-add-to-storage',
  templateUrl: './add-to-storage.component.html',
  styleUrls: ['./add-to-storage.component.css']
})
export class AddToStorageComponent implements OnInit {
  service: StorageApiService;
  storage: storageItem= new storageItem("Name",0,0,"Description");

  constructor(service: StorageApiService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  onSubmit():void{

    console.log("made it to submit")
    this.service.save(this.storage).subscribe(stored=>console.log(stored));
    this.service.findAll().subscribe(data=>{console.log(data);});
  }
}
//ADd alerts? error:()=>{alert("error saving")}
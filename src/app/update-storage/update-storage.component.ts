import { Component, OnInit } from '@angular/core';
import { storageItem } from '../models/storageItem';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-update-storage',
  templateUrl: './update-storage.component.html',
  styleUrls: ['./update-storage.component.css']
})
export class UpdateStorageComponent implements OnInit {
  service: StorageApiService;
  storage: storageItem= new storageItem("Name",0,0,"Description");

  constructor(service: StorageApiService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  onSubmit():void{

    console.log("made it to submit")
    this.service.update(this.storage).subscribe(stored=>console.log(stored));
    this.service.findAll().subscribe(data=>{console.log(data);});
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { storageItem } from '../models/storageItem';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.css']
})
export class StorageListComponent implements OnInit {
  service :StorageApiService
  @Input() currStorage: Array<any> = [];
  constructor(service: StorageApiService) {
    this.service=service;
   }

   //Initializes the list component
  ngOnInit(): void {
    this.service.findAll().subscribe(data=>{
      this.currStorage = data;
    })
  }
  onDelete(givenid:number):void{
    console.log("Made it to delete" +givenid);
    this.service.delete(givenid).subscribe(data=>console.log(data));
    this.service.findAll().subscribe(data=>{
      this.currStorage = data;
    })
    this.service.findAll().subscribe(data=>{
      this.currStorage = data;
    })
  }
  onUpdate(storage:storageItem):void{
    console.log("Made it to Update" +storage.id);
    this.service.update(storage).subscribe(data=>console.log(data));
  }
  onUpdatePress(givenid:number):void{


  }
}



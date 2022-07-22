import { Component, OnInit } from '@angular/core';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.css']
})
export class StorageListComponent implements OnInit {
  service :StorageApiService
  currStorage: Array<any> = [];
  constructor(service: StorageApiService) {
    this.service=service;
   }

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
  }
  onUpdate(givenid:number):void{
    console.log("Made it to Update" +givenid);
    this.service.update(givenid).subscribe(data=>console.log(data));
  }

}



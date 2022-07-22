import { Component, OnInit } from '@angular/core';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-find-storage-name',
  templateUrl: './find-storage-name.component.html',
  styleUrls: ['./find-storage-name.component.css']
})

//This class stores the name inputted in the text field and the object it receives from the query
// 
export class FindStorageNameComponent implements OnInit {
  service :StorageApiService;
  searchName: string;
  storage: any;
  constructor(service: StorageApiService) {
    this.service=service;
    this.searchName="";
   }
  ngOnInit(): void {
  }
  onChange():void{
    this.service.findByName(this.searchName).subscribe(data =>{
      this.storage = data;
    })
  }
}

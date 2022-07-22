import { Component, OnInit } from '@angular/core';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-find-storage',
  templateUrl: './find-storage.component.html',
  styleUrls: ['./find-storage.component.css']
})
export class FindStorageComponent implements OnInit {

  service :StorageApiService;
  searchId: number;
  storage: any;
  shown:boolean = false;
  constructor(service: StorageApiService) {
    this.service=service;
    this.searchId=0;
   }
  ngOnInit(): void {
  }
  onChange():void{
    this.service.findById(this.searchId).subscribe(data =>{
      this.storage = data;
    })
  }
  onClick():void{
    this.storage =0;
  }
}

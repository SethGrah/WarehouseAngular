import { Component, OnInit } from '@angular/core';
import { StorageApiService } from '../storage-api.service';

@Component({
  selector: 'app-find-storage',
  templateUrl: './find-storage.component.html',
  styleUrls: ['./find-storage.component.css']
})
export class FindStorageComponent implements OnInit {

  service :StorageApiService;
  searchId: any;
  storage: any;
  shown:boolean = false;
  constructor(service: StorageApiService) {
    this.service=service;
    this.searchId="";
   }
  ngOnInit(): void {
  }
  onChange():void{
    this.service.findById(this.searchId).subscribe(data =>{
      this.storage = data;
    })
  }
  isShown():void{
    
    this.shown = !this.shown
  }
  onSub():void{
    if(this.searchId!=""){
    this.onChange();
    this.isShown();
    }
  }
}

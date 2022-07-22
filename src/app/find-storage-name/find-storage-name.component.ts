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
  shown:boolean=false;
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
  
  isShown():void{
    this.shown = !this.shown
  }
  //Wrapper function to call both in button onClick
  onSub():void{
    if(this.searchName!="" && this.searchName!=null){
    this.onChange();
    this.isShown();}
  }
}

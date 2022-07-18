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

}

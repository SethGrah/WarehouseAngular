import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storageItem } from '../models/storageItem';
import { StorageApiService } from '../storage-api.service';


@Component({
  selector: 'app-update-storage',
  templateUrl: './update-storage.component.html',
  styleUrls: ['./update-storage.component.css']
})
export class UpdateStorageComponent implements OnInit {
  service: StorageApiService;
  storage: storageItem = new storageItem("Name", 0, 0, "Description");//this would be the input from the parent component
  id: number = 0;
  constructor(service: StorageApiService,private route: ActivatedRoute) {
    this.service = service;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.storage.id = params['storeid'];
      this.service.findById(this.storage.id).subscribe(data=>{this.storage=data})
    })
  }
  onSubmit(): void {
    console.log("made it to submit")
    this.id = this.storage.id;
    if (this.service.findById(this.id).subscribe(data => { console.log(data); }) != null) {
      console.log("inside update");
      this.service.update(this.storage,this.storage.id).subscribe(stored => console.log(stored));
    }



  }
}

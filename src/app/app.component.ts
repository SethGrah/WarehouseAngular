import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  title = 'warehouse-app';
  mediaSub:Subscription=new Subscription();
  deviceXs: boolean=false;
  constructor(public mediaObserver:MediaObserver){
  }
  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.asObservable().subscribe(
      (result:MediaChange[])=>{
        console.log(result[0].mqAlias)
        this.deviceXs= result[0].mqAlias === 'xs'? true:false;
      });
        
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StorageListComponent } from './storage-list/storage-list.component';
import { FindStorageComponent } from './find-storage/find-storage.component';
@NgModule({
  declarations: [
    AppComponent,
    StorageListComponent,
    FindStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
  STEPS TO MAKE STORAGE LIST APPEAR
  1. CREATE STORAGE LIST COMPONENT ng g c storage-list
  2. CREATE STORAGE API SERVICE ng g s storage-api
  3. ADD HTTPCLIENTMODULE TO  app.module.ts
  4. Inject httpclient into storageapi
  5.Call api service in component constructor, and subscribe


*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StorageListComponent } from './storage-list/storage-list.component';
import { FindStorageComponent } from './find-storage/find-storage.component';
import { DeleteStorageComponent } from './delete-storage/delete-storage.component';
import { UpdateStorageComponent } from './update-storage/update-storage.component';
import { FindStorageNameComponent } from './find-storage-name/find-storage-name.component';
import { AddToStorageComponent } from './add-to-storage/add-to-storage.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    StorageListComponent,
    FindStorageComponent,
    DeleteStorageComponent,
    UpdateStorageComponent,
    FindStorageNameComponent,
    AddToStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ButtonModule, FlexLayoutModule, BrowserAnimationsModule,MatToolbarModule,TableModule
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
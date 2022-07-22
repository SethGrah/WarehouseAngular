import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StorageListComponent } from './storage-list/storage-list.component';
import { FindStorageComponent } from './find-storage/find-storage.component';
import { FindStorageNameComponent } from './find-storage-name/find-storage-name.component';
import { AddToStorageComponent } from './add-to-storage/add-to-storage.component';


import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {TableModule} from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {InputTextModule} from 'primeng/inputtext';
import { Routes,RouterModule } from '@angular/router';
import { UpdateStorageComponent } from './update-storage/update-storage.component';
import { retry, catchError } from 'rxjs/operators';

//https://github.com/SethGrah/WarehouseAngular
//https://github.com/SethGrah/WarehouseMaven
const routes: Routes=[{path:'storage-list',component:StorageListComponent},
                      {path:'add-to-storage',component:AddToStorageComponent}, 
                      {path: 'update-storage',component:UpdateStorageComponent}
                    ];

@NgModule({
  declarations: [
    AppComponent,
    StorageListComponent,
    FindStorageComponent,
    FindStorageNameComponent,
    AddToStorageComponent,
    HeaderComponent,
    UpdateStorageComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    TableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    InputTextModule,
    RouterModule.forRoot(routes)

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
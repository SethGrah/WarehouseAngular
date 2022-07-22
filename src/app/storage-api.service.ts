import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { storageItem } from './models/storageItem';

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {

  http: HttpClient
  constructor(http: HttpClient) { 
    this.http = http;
  }
  findAll() :Observable<any>{
    return this.http.get(environment.apiUrl);
  }
  findById(id:number):Observable<any>{
    return this.http.get(environment.apiUrl + id);
  }
  findByName(name: string): Observable<any>{
    return this.http.get(environment.apiUrl+name);
  }
  save(storage:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl,storage)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(environment.apiUrl+id);
  }
  update(storage:any,id:any):Observable<any>{
    return this.http.put(environment.apiUrl+id,storage);
  }

//All basic Crud operations
}
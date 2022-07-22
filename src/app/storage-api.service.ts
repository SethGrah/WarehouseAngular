import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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
    return this.http.post<any>(environment.apiUrl,storage);
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl+id);
  }
  update(storage:any):Observable<any>{
    return this.http.put(environment.apiUrl,storage);
  }
}

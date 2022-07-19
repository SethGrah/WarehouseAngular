import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  save(storageForm:Storage):Observable<any>{
    return this.http.post(environment.apiUrl,storageForm);
  }
}

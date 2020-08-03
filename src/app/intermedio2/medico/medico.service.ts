import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public httpClient: HttpClient) { }

  getMedicos = () => {
    return this.httpClient.get('...');
  }
}

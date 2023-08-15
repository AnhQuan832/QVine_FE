import { Injectable } from '@angular/core';
import { API_URL } from '../constants/API_URL';

import { HttpClient } from '@angular/common/http';
import { Table } from '../models/Table';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = API_URL + "/table"
  constructor(
    private http: HttpClient
  ) { }
  public getAllTable() {
    return this.http.get<Table[]>(this.baseURL);
  }



}

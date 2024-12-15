import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = "https://localhost:7096/api/controller/"

  getDashboardData(){
    console.log(`${this.baseUrl}dashboard-details`)
    return this.http.get<any>(`${this.baseUrl}dashboard-details`)
  }
}

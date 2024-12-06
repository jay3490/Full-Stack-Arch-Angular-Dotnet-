import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router, private dashboardService: DashboardService)
  {

  }
  chartDetails: any;
  totalAssets = 0;
  assestsAvailable = 0;
  assetsAssigned = 0;
  assetsOutOfStock = 0;


  getDashboardData(){
    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {
        console.log(res);
      }
    })

  }

}

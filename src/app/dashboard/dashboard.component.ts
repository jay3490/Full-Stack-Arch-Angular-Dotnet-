import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router, private dashboardService: DashboardService)
  {

  }
  ngOnInit(): void {
    this.getDashboardData();
  }
  chartDetails: any;
  totalAssets = 0;
  assetsAvailable = 0;
  assetsAssigned = 0;
  assetsOutOfStock = 0;

  getDashboardData() {
    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {
        console.log(res);
        this.totalAssets = res[0];
        this.assetsAvailable = res[1];
        this.assetsAssigned = res[2];
        this.assetsOutOfStock = res[3];
      }
    })

  }

}

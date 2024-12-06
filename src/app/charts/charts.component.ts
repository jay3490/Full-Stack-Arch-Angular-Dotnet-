import { Component } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  constructor(dashboardService: DashboardService) {}
  barChartData: any;
  barChartOptions: any = {
    responsive: true
  };
  barChartLabels: any;
  barChartLegend: true;

  ngOnInit() {
    
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InwardComponent } from './inward/inward.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductComponent } from './product/product.component';
import { ReportComponent } from './report/report.component';
import { SystemComponent } from './system/system.component';
import { AccessDeniedComponent } from './_errors/access-denied/access-denied.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginPageComponent, pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  {path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  {path: 'inward', component: InwardComponent, canActivate: [AuthGuard] },
  {path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
  {path: 'access-denied', component: AccessDeniedComponent, canActivate: [AuthGuard]},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: '**', component: AccessDeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

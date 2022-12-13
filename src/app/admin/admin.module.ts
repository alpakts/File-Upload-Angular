import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsComponent } from './components/forms/forms.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes:Routes = [{ path: "", component: DashboardComponent },
{ path: "users", component: UsersComponent }, { path: "forms", component: FormsComponent }]
@NgModule({
  declarations: [
    AdminComponent,
    FormsComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ], exports: [AdminComponent,
    FormsComponent,
    UsersComponent,
    DashboardComponent]
})
export class AdminModule { }

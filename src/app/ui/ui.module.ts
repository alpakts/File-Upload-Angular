import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './components/apply/apply.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxFileDropModule } from 'ngx-file-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes:Routes=[{path:"",component:UiComponent},{path:"apply",component:ApplyComponent}]

@NgModule({
  declarations: [
    UiComponent,
    ApplyComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    MatFormFieldModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class UiModule { }
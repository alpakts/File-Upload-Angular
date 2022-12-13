import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path:"",loadChildren:()=>
    import("./ui/ui.module").then(module=>module.UiModule)
  },
  {path:"admin",component:AdminComponent,loadChildren:()=>
  import("./admin/admin.module").then(module=>module.AdminModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

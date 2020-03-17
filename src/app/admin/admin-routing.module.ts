import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ViewStoreComponent } from "./view-store/view-store.component";
import { CreateStoreComponent } from './create-store/create-store.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: AdminHomeComponent
      },
      {
        path: "viewStore",
        component: ViewStoreComponent
      },
      {
        path: "createStore",
        component: CreateStoreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

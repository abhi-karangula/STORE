import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent, ViewStoreComponent, CreateStoreComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }

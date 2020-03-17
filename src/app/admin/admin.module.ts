import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModalComponent } from './store-modal/store-modal.component';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent, ViewStoreComponent, CreateStoreComponent, StoreModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [StoreModalComponent]
})
export class AdminModule { }

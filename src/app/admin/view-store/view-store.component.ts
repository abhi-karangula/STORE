import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/services/store.service";
import { MatDialog } from '@angular/material/dialog';
import { StoreModalComponent } from '../store-modal/store-modal.component';

@Component({
  selector: "app-view-store",
  templateUrl: "./view-store.component.html",
  styleUrls: ["./view-store.component.scss"]
})
export class ViewStoreComponent implements OnInit {
  storeList: any[];
  constructor(private storeService: StoreService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getStoreList();
  }

  getStoreList() {
    this.storeService.getStoreList().subscribe(
      response => {
        this.storeList = response;
      },
      error => {
        alert("error");
      }
    );
  }

  deleteStore(id) {
    this.storeService.deleteStore(id).subscribe((response) => {
      this.storeList = response;
    }, error => {
      alert(error);
    })
  }

  editStore(id) {
    // const modalRef = this.modalService.open(StoreModalComponent, { size: 'lg' });
    // modalRef.componentInstance.id = id;
    const dialogRef = this.dialog.open(StoreModalComponent, {
      width: "600px",
      data: id,
      position: {
        top: "5%",
        left: "30%"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

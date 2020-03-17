import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-view-store",
  templateUrl: "./view-store.component.html",
  styleUrls: ["./view-store.component.scss"]
})
export class ViewStoreComponent implements OnInit {
  storeList: any[];
  constructor(private storeService: StoreService) {}

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
}

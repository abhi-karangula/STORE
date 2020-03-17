import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-store-modal',
  templateUrl: './store-modal.component.html',
  styleUrls: ['./store-modal.component.scss']
})
export class StoreModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close({ isCancelled: true });
  }

}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: "app-create-store",
  templateUrl: "./create-store.component.html",
  styleUrls: ["./create-store.component.scss"]
})
export class CreateStoreComponent implements OnInit {
  storeForm: FormGroup;
  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.storeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      area: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      pin: new FormControl("", [Validators.required]),
      locality: new FormControl("", [Validators.required]),
      landmark: new FormControl("", [Validators.required])
    });
  }

  create() {
    let request = {
      name : this.storeForm.get('name').value,
      area: this.storeForm.get('area').value,
      city: this.storeForm.get('city').value,
      state: this.storeForm.get('state').value,
      pin: this.storeForm.get('pin').value,
      locality: this.storeForm.get('locality').value,
      landmark: this.storeForm.get('landmark').value
    }
    this.storeService.saveStore(request).subscribe(
      response => {
        alert('store has been created.');
      }, error => {
        alert('error while creating store.');
      }
    )
  }
}

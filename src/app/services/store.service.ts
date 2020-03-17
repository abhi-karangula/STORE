import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getStoreList() {
    return this.http.get('/api/store/getStoreList').pipe(
      map((storeList: any) => {
        return storeList;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  saveStore(request) {
    return this.http.post('/api/store/saveStore', request).pipe(
      map((store: any) => {
        return store;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  deleteStore(id) {
    return this.http.delete('/api/store/deleteStore?id='+id).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}

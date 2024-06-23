import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);

  getUserInfo() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/xml'
    });

    return this.http.get('https://fakestoreapi.com/products/1', { headers })
  }
}

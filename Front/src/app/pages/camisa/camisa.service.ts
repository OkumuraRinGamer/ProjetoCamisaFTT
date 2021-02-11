import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Camisa from "./camisa";

@Injectable({
  providedIn: "root",
})
export class CamisaService {
  protected url = "http://localhost:8080/camisa";

  constructor(protected http: HttpClient) {}

  findAll(): Observable<Camisa[]> {
    return this.http.get<Camisa[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: Camisa): Observable<Camisa> {
    if (data.id) {
      return this.http.put<Camisa>(this.url, data);
    } else {
      return this.http.post<Camisa>(this.url, data);
    }
  }

  findById(id: number): Observable<Camisa> {
    return this.http.get<Camisa>(`${this.url}/${id}`);
  }
}

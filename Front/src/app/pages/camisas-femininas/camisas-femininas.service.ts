import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import CamisasFemininas from "./camisasFemininas";

@Injectable({
  providedIn: "root",
})
export class CamisasFemininasService {
  protected url = "http://localhost:8080/camisasFemininas";

  constructor(protected http: HttpClient) {}

  findAll(): Observable<CamisasFemininas[]> {
    return this.http.get<CamisasFemininas[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: CamisasFemininas): Observable<CamisasFemininas> {
    if (data.id) {
      return this.http.put<CamisasFemininas>(this.url, data);
    } else {
      return this.http.post<CamisasFemininas>(this.url, data);
    }
  }

  findById(id: number): Observable<CamisasFemininas> {
    return this.http.get<CamisasFemininas>(`${this.url}/${id}`);
  }
}

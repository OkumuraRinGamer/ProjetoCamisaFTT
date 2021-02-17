import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import CamisasMasculinas from "./camisasMasculinas";

@Injectable({
  providedIn: "root",
})
export class CamisasMasculinasService {
  protected url = "http://localhost:8080/camisasMasculinas";

  constructor(protected http: HttpClient) {}

  findAll(): Observable<CamisasMasculinas[]> {
    return this.http.get<CamisasMasculinas[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: CamisasMasculinas): Observable<CamisasMasculinas> {
    if (data.id) {
      return this.http.put<CamisasMasculinas>(this.url, data);
    } else {
      return this.http.post<CamisasMasculinas>(this.url, data);
    }
  }

  findById(id: number): Observable<CamisasMasculinas> {
    return this.http.get<CamisasMasculinas>(`${this.url}/${id}`);
  }
}

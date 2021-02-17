import { Component, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { CamisasMasculinasService } from "../camisas-masculinas.service";

import CamisasMasculinas from "../camisasMasculinas";

@Component({
  selector: "app-camisas-masculinas-list",
  templateUrl: "./camisas-masculinas-list.component.html",
  styleUrls: ["./camisas-masculinas-list.component.css"],
})
export class CamisasMasculinasListComponent implements OnInit {
  constructor(private camisasMasculinasService: CamisasMasculinasService) {}

  camisasMasculinas: CamisasMasculinas[] = [];
  ngOnInit() {
    this.findAllCamisas();
  }

  findAllCamisas() {
    this.camisasMasculinasService
      .findAll()
      .subscribe((response) => (this.camisasMasculinas = response));
  }

  deleteById(id: number): void {
    this.camisasMasculinasService
      .deleteById(id)
      .subscribe(() => this.findAllCamisas());
  }
}

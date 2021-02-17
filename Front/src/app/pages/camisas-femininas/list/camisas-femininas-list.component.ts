import { Component, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { CamisasFemininasService } from "../camisas-femininas.service";

import CamisasFemininas from "../camisasFemininas";

@Component({
  selector: "app-camisas-femininas-list",
  templateUrl: "./camisas-femininas-list.component.html",
  styleUrls: ["./camisas-femininas-list.component.css"],
})
export class CamisasFemininasListComponent implements OnInit {
  constructor(private camisasFemininasService: CamisasFemininasService) {}

  camisasFemininas: CamisasFemininas[] = [];
  ngOnInit() {
    this.findAllCamisas();
  }

  findAllCamisas() {
    this.camisasFemininasService
      .findAll()
      .subscribe((response) => (this.camisasFemininas = response));
  }

  deleteById(id: number): void {
    this.camisasFemininasService
      .deleteById(id)
      .subscribe(() => this.findAllCamisas());
  }
}

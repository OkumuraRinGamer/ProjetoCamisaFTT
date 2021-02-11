import { Component, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import Camisa from "../camisa";
import { CamisaService } from "../camisa.service";

@Component({
  selector: "app-camisa-list",
  templateUrl: "./camisa-list.component.html",
  styleUrls: ["./camisa-list.component.css"],
})
export class CamisaListComponent implements OnInit {
  constructor(private camisaService: CamisaService) {}

  camisas: Camisa[] = [];
  ngOnInit() {
    this.findAllCamisas();
  }

  findAllCamisas() {
    this.camisaService
      .findAll()
      .subscribe((response) => (this.camisas = response));
  }

  deleteById(id: number): void {
    this.camisaService.deleteById(id).subscribe(() => this.findAllCamisas());
  }
}

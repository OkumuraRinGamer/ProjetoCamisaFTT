import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CamisasFemininasService } from "../camisas-femininas.service";
import CamisasFemininas from "../camisasFemininas";

@Component({
  selector: "app-camisas-femininas-form",
  templateUrl: "./camisas-femininas-form.component.html",
  styleUrls: ["./camisas-femininas-form.component.css"],
})
export class CamisasFemininasFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private camisasFemininasService: CamisasFemininasService,
    private activatedRoute: ActivatedRoute
  ) {}

  camisasFemininasForm: FormGroup;
  action: string;
  validated: boolean;

  ngOnInit() {
    this.createForm();
    this.action = this.activatedRoute.snapshot.url[0].path;

    if (this.action == "alterar") {
      this.setValue();
    }
  }

  createForm(): void {
    this.camisasFemininasForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.camisasFemininasService
      .findById(Number(id))
      .subscribe((response) => this.camisasFemininasForm.patchValue(response));
  }

  onSave(value: CamisasFemininas): void {
    Object.keys(this.camisasFemininasForm.controls).forEach((field) =>
      this.camisasFemininasForm.get(field).markAllAsTouched()
    );

    if (this.camisasFemininasForm.invalid) {
      return;
    }

    console.log(value);
    this.camisasFemininasService
      .save(value)
      .subscribe((response) => this.router.navigate(["camisasFemininas"]));
  }

  onCancel(): void {
    this.router.navigate(["camisasFemininas"]);
  }
}

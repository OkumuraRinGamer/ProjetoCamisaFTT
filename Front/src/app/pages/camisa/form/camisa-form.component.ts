import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Camisa from "../camisa";
import { CamisaService } from "../camisa.service";

@Component({
  selector: "app-camisa-form",
  templateUrl: "./camisa-form.component.html",
  styleUrls: ["./camisa-form.component.css"],
})
export class CamisaFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private camisaService: CamisaService,
    private activatedRoute: ActivatedRoute
  ) {}

  camisaForm: FormGroup;
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
    this.camisaForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.camisaService
      .findById(Number(id))
      .subscribe((response) => this.camisaForm.patchValue(response));
  }

  onSave(value: Camisa): void {
    Object.keys(this.camisaForm.controls).forEach((field) =>
      this.camisaForm.get(field).markAllAsTouched()
    );

    if (this.camisaForm.invalid) {
      return;
    }

    console.log(value);
    this.camisaService
      .save(value)
      .subscribe((response) => this.router.navigate(["camisa"]));
  }

  onCancel(): void {
    this.router.navigate(["camisa"]);
  }
}

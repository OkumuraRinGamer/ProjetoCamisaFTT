import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CamisasMasculinasService } from "../camisas-masculinas.service";
import CamisasMasculinas from "../camisasMasculinas";

@Component({
  selector: "app-camisas-masculinas-form",
  templateUrl: "./camisas-masculinas-form.component.html",
  styleUrls: ["./camisas-masculinas-form.component.css"],
})
export class CamisasMasculinasFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private camisasMasculinasService: CamisasMasculinasService,
    private activatedRoute: ActivatedRoute
  ) {}

  camisasMasculinasForm: FormGroup;
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
    this.camisasMasculinasForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.camisasMasculinasService
      .findById(Number(id))
      .subscribe((response) => this.camisasMasculinasForm.patchValue(response));
  }

  onSave(value: CamisasMasculinas): void {
    Object.keys(this.camisasMasculinasForm.controls).forEach((field) =>
      this.camisasMasculinasForm.get(field).markAllAsTouched()
    );

    if (this.camisasMasculinasForm.invalid) {
      return;
    }

    console.log(value);
    this.camisasMasculinasService
      .save(value)
      .subscribe((response) => this.router.navigate(["camisasMasculinas"]));
  }

  onCancel(): void {
    this.router.navigate(["camisasMasculinas"]);
  }
}

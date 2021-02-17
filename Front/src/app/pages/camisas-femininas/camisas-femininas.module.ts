import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisasFemininasRoutingModule } from "./camisas-femininas-routing.module";
import { CamisasFemininasService } from "./camisas-femininas.service";
import { CamisasFemininasFormComponent } from "./form/camisas-femininas-form.component";
import { CamisasFemininasListComponent } from "./list/camisas-femininas-list.component";

@NgModule({
  declarations: [CamisasFemininasListComponent, CamisasFemininasFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CamisasFemininasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CamisasFemininasService],
})
export class CamisasFemininasModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CamisasMasculinasListComponent } from "./list/camisas-masculinas-list.component";
import { CamisasMasculinasFormComponent } from "./form/camisas-masculinas-form.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisasMasculinasRoutingModule } from "./camisas-masculinas-routing.module";
import { CamisasMasculinasService } from "./camisas-masculinas.service";

@NgModule({
  declarations: [
    CamisasMasculinasListComponent,
    CamisasMasculinasFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CamisasMasculinasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CamisasMasculinasService],
})
export class CamisasMasculinasModule {}

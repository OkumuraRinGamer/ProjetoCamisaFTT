import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisaListComponent } from "./list/camisa-list.component";
import { CamisaService } from "./camisa.service";
import { CamisaRoutingModule } from "./camisa-routing.module";
import { CamisaFormComponent } from "./form/camisa-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CamisaListComponent, CamisaFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CamisaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CamisaService],
})
export class CamisaModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { InicioAdmRoutingModule } from "./inicio-adm-routing.module";
import { InicioAdmComponent } from "./inicio-adm.component";

@NgModule({
  declarations: [InicioAdmComponent],
  imports: [CommonModule, SharedModule, InicioAdmRoutingModule],
  providers: [],
})
export class InicioAdmModule {}

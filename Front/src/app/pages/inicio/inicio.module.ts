import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { InicioRoutingModule } from "./inicio-routing.module";
import { BemvindoComponent } from "./bemvindo/bemvindo.component";

@NgModule({
  declarations: [BemvindoComponent],
  imports: [CommonModule, SharedModule, InicioRoutingModule],
  providers: [],
})
export class BemvindoModule {}

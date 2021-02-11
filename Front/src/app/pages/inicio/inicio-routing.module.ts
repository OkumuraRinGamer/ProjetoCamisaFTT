import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BemvindoComponent } from "./bemvindo/bemvindo.component";

const routes: Routes = [
  {
    path: "",
    component: BemvindoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}

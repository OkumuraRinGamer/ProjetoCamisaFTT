import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CamisasFemininasFormComponent } from "./form/camisas-femininas-form.component";
import { CamisasFemininasListComponent } from "./list/camisas-femininas-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasFemininasListComponent,
  },
  {
    path: "cadastrar",
    component: CamisasFemininasFormComponent,
  },
  {
    path: "alterar/:id",
    component: CamisasFemininasFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasFemininasRoutingModule {}

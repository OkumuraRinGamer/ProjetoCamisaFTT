import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CamisasMasculinasFormComponent } from "./form/camisas-masculinas-form.component";
import { CamisasMasculinasListComponent } from "./list/camisas-masculinas-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasMasculinasListComponent,
  },
  {
    path: "cadastrar",
    component: CamisasMasculinasFormComponent,
  },
  {
    path: "alterar/:id",
    component: CamisasMasculinasFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasMasculinasRoutingModule {}

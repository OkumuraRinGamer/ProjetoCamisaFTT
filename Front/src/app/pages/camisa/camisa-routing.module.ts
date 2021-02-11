import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CamisaFormComponent } from "./form/camisa-form.component";
import { CamisaListComponent } from "./list/camisa-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisaListComponent,
  },
  {
    path: "cadastrar",
    component: CamisaFormComponent,
  },
  {
    path: "alterar/:id",
    component: CamisaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisaRoutingModule {}

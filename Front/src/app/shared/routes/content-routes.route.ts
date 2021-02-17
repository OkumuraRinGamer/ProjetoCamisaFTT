import { Routes } from "@angular/router";

export const CONTENT_ROUTE: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../pages/inicio/inicio.module").then((m) => m.BemvindoModule),
  },
  {
    path: "camisasMasculinas",
    loadChildren: () =>
      import("../../pages/camisas-masculinas/camisas-masculinas.module").then(
        (m) => m.CamisasMasculinasModule
      ),
  },
  {
    path: "camisasFemininas",
    loadChildren: () =>
      import("../../pages/camisas-femininas/camisas-femininas.module").then(
        (m) => m.CamisasFemininasModule
      ),
  },
];

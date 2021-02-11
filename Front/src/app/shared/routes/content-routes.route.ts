import { Routes } from "@angular/router";

export const CONTENT_ROUTE: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../pages/inicio/inicio.module").then((m) => m.BemvindoModule),
  },
  {
    path: "camisa",
    loadChildren: () =>
      import("../../pages/camisa/camisa.module").then((m) => m.CamisaModule),
  },
];

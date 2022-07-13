import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { OtraPaginaComponent } from './otra-pagina/otra-pagina.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';

const routes: Routes = [
  {path:'', component: MiComponenteComponent},
  {path:'pagina2',component:OtroComponenteComponent},
  {path:'pagina3',component:OtraPaginaComponent},
  {path:'pagina3/:elargumento',component:OtraPaginaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

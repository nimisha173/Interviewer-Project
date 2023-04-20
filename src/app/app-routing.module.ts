import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateformComponent } from './updateform/updateform.component';
import { MainformComponent } from './mainform/mainform.component';

const routes: Routes = [{path: '',component:MainformComponent},
  {path: 'update-form',component:UpdateformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

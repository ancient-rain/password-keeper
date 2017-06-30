import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'app/+main/main.component';
import { SigninComponent } from 'app/+signin/signin.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

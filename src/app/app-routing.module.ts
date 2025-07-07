import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvaMainComponent } from './canva-main/canva-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardContentComponent } from '@predigle/micro';

// Optional: Route guards
// import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',redirectTo: 'canva',pathMatch: 'full',
  },
  { 
    path:"canva", component: CardContentComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [CanvaMainComponent, PageNotFoundComponent]
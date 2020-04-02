import { NgModule } from '@angular/core';   
import { Routes, RouterModule } from '@angular/router';  //include router module 
import { ProductdescriptionComponent } from '../productdescription/productdescription.component';  
import { CardComponent } from './card.component';
import { RoutecheckComponent } from '../routecheck/routecheck.component';

const routes: Routes = [{  
path: 'productdescription/:id',  
component: ProductdescriptionComponent  
}, {  
   path: '',  
   component: CardComponent  
}];  
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


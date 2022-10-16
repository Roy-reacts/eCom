import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/Product/cart/cart.component';
import { CheckoutComponent } from './components/Product/checkout/checkout.component';
import { PreorderComponent } from './components/Product/preorder/preorder.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product-details', component:ProductDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'pre-order', component:PreorderComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

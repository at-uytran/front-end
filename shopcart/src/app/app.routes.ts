import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DefaultComponent } from './default.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: DefaultComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
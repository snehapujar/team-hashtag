import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { UserSignupComponent } from './user-signup/user-signup.component';

import { UserLoginComponent } from './user-login/user-login.component';

import { HomeComponent } from './home/home.component';

import { ProductInfoComponent } from './product-info/product-info.component';

import { ProductDetailsComponent } from './product-details/product-details.component';

import { BuynowComponent } from './buynow/buynow.component';



const routes: Routes = [



{ path: '', redirectTo: 'users', pathMatch: 'full'},

{ path: 'users', component: UserSignupComponent},

{ path: 'login', component: UserLoginComponent},

{ path: 'home', component: HomeComponent},

{ path: 'products', component: ProductInfoComponent},

{ path: 'buy', component: BuynowComponent},



{ path: 'details/:product_id/:product_name/:product_description/:product_price/:product_icon', component: ProductDetailsComponent},







];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
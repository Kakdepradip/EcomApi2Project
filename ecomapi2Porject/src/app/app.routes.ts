import { Routes } from '@angular/router';
import { Home } from './Component/home/home';
import { SellerAuth } from './Component/seller-auth/seller-auth';

export const routes: Routes = [
    {
       path: '',
       component:Home
     
    },
    {
        path:'seller-auth',
        component:SellerAuth
    }
];

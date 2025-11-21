import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { HomePage } from './+pages/+public/home-page/home-page';
import { AboatPage } from './+pages/+public/aboat-page/aboat-page';
import { ProductsPage } from './+pages/+public/products-page/products-page';
import * as privatePage from './+pages/+private/products-page/products-page';

import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';

export const routes: Routes = [
{path:'public',component:PublicTemplate,children:[
    {path:'home',component:HomePage},
    {path:'aboat',component:AboatPage},
    {path:'products',component:ProductsPage},
    {path:'contact',component:ContactPage},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
]},
{path:'private',component:PrivateTemplate,children:[
    {path:'dashboard',component:DashboardPage},
    {path:'users',component:UsersPage},
    {path:'products',component:privatePage.ProductsPage},
    {path:'orders',component:OrdersPage},
    {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
    {path:'**',redirectTo:'dashboard'}
]},
{path:'',redirectTo:'public', pathMatch:'full'},
{path:'**',redirectTo:'public'}
];

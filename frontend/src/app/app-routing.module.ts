import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ItemComponent } from './item/item.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';



const routes: Routes = [
  
  // { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'items', component: ItemComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'customers', component:CustomersComponent},
  { path: 'registration', component:RegistrationComponent},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'navigation', component: NavigationComponent },


// { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

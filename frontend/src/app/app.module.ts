import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier/supplier.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

  { path: 'admin', component: AdminComponent },
  { path: 'admin', component: CustomersComponent },

  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemComponent},
  { path: 'customer', component: CustomersComponent},



]



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    SupplierComponent,
    ItemComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    
    DashboardComponent,
    CustomersComponent,
    RegistrationComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CartComponent } from './cart/cart.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { PoliciesComponent } from './policies/policies.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: '',                    component: HomeComponent },
  { path: 'search',              component: SearchPageComponent },
  { path: 'product/:slug',       component: ProductComponent },
  { path: 'cart',                component: CartComponent },
  { path: 'enquiries',           component: EnquiriesComponent },
  { path: 'policies',            component: PoliciesComponent },
  { path: '404',                 component: PageNotFoundComponent }   
  { path: '**',                  component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    SearchPageComponent,
    PageNotFoundComponent,
    SearchFormComponent,
    SearchResultsComponent,
    CartComponent,
    EnquiriesComponent,
    PoliciesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

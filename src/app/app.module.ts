import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from './app-routing.model';
import {HttpClientModule} from '@angular/common/http'
import { ProductServices } from './product.service';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SubcatComponent } from './subcat/subcat.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductDetailsComponent,
    MainScreenComponent,
    WomenComponent,
    MenComponent,
    KidComponent,
    WishlistComponent,
    OrderComponent,
    MyaccountComponent,
    SubcatComponent,
    EditprofileComponent,
    ContactComponent,
  
  ],

  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule , 
    ReactiveFormsModule
    ],
    providers: [ProductServices,CartServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { SubcatComponent } from './subcat/subcat.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:MainScreenComponent},
    {path:'product-details/:id',component:ProductDetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent},
    {path:'subcat',component:SubcatComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'editprofile',component:EditprofileComponent},
    {path:'contact',component:ContactComponent},
    {path:'myaccount',component:MyaccountComponent}

];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}
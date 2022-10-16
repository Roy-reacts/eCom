import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/Header/header/header.component';
import { HomeComponent } from './components/Home/home/home.component';
import { HomeCarouselComponent } from './components/Home/home/home-carousel/home-carousel.component';
import { FeaturedCtComponent } from './components/Home/home/featured-ct/featured-ct.component';
import { FeaturedProductsComponent } from './components/Home/home/featured-products/featured-products.component';
import { BannerDivComponent } from './components/Home/home/banner-div/banner-div.component';
import { BannerSecondComponent } from './components/Home/home/banner-second/banner-second.component';
import { FooterComponent } from './layout/Footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDirective } from './components/product-details/product.directive';
import { TabViewModule } from 'primeng/tabview';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './components/Login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/Login/sign-up/sign-up.component';
import { CartComponent } from './components/Product/cart/cart.component';
import { CheckoutComponent } from './components/Product/checkout/checkout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PreorderComponent } from './components/Product/preorder/preorder.component';
import { TopBrandsComponent } from './components/Home/home/top-brands/top-brands.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeCarouselComponent,
    FeaturedCtComponent,
    FeaturedProductsComponent,
    BannerDivComponent,
    BannerSecondComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductDirective,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    CheckoutComponent,
    NotfoundComponent,
    PreorderComponent,
    TopBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    CarouselModule,
    ToastModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SwiperModule,
    TabViewModule,
    TabsModule,
    ModalModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

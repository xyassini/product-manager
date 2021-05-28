import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductListItemModule } from './product/product-list/product-list-item/product-list-item.module';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoModule } from './producto/producto.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { ProveedorModule } from '../proveedor/proveedor.module';
import { ClienteModule } from '../cliente/cliente.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ProveedorModule,
        ClienteModule
    ],
    declarations: [AuthLoginComponent, AuthSignUpComponent],
    providers: [AuthService],
    bootstrap: [AuthLoginComponent]
})
export class AuthModule { }
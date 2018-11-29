import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import {ProveedorDetail} from '../../proveedor/proveedor-detail';
import {ProveedorService} from '../../proveedor/proveedor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private proveedorService:ProveedorService
    ) { }

    user: User;

    roles: String[];
    
    proveedor: ProveedorDetail;
    
    showCreate: boolean;
    
    showProveedor: boolean;
    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.user.role);
        this.toastrService.success('Logged in')
        if(this.user.role == 'Proveedor')
        {
           this.validate();
   
        }
        
    }
    
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    
    showHideUsuario(): void {
        if(this.user.role == 'Proveedor')
        {
            console.log('llegue2')
        
        this.showProveedor = !this.showProveedor;
        }
    }
    
    validate(): void{
        this.proveedorService.validate(this.user.name, this.user.password)
            .subscribe(proveedorASD => {                
                this.proveedor = proveedorASD;                          
                
        });
        this.showHideUsuario();
                console.log("booleano" + this.showProveedor);
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.showCreate = false;
        this.showProveedor = true;
        this.user = new User();
        this.roles = ['Administrator', 'Client', 'Proveedor'];
    }

}
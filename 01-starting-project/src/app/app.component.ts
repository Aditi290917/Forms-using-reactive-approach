import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [LoginComponent, SignupComponent]
})
export class AppComponent {}

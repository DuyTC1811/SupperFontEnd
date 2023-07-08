import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {RegisterRequest} from "../models/request/register-request";
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, NgClass]
})
export class RegisterComponent implements OnInit {
    listRole = [
        { id: 1, role: "READ" },
        { id: 2, role: "WRITE" },
        { id: 3, role: "READ_WRITE" }
    ];
    form: RegisterRequest = {
        username: '',
        password: '',
        email: '',
        mobile: '',
        rolesId: [],
        permissionId: ''
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(
        private authService: AuthenticationService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const {username, email, password, mobile, rolesId, permissionId} = this.form;

        this.authService.register(username, email, password, mobile, rolesId, permissionId).subscribe({
            next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
}

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
//sweetalert2
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup;
  submitted = false;

  userLogin = {
    "username": "",
    "password": ""
  }

  //Constructor
  constructor(private FormBuilder: FormBuilder, private auth: AuthServiceService) { }
  //
  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  submitLogin() {
    this.submitted = true;
    //check validate
    if (this.loginForm.invalid) {
      alert('Error');
    } else {
      this.userLogin.username = this.loginForm.value.username;
      this.userLogin.password = this.loginForm.value.password;

      this.auth.loginService(this.userLogin).subscribe({
        next: (data: any) => {
          console.log(data);
          Swal.fire({
            title: 'Success!',
            text: 'Login Success',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        },
        error: (error:any) =>{
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    })
  }
}
//reset form
resetLoingin() {
  this.submitted = false;
  this.loginForm.reset();
}

}

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  userRegister = {
    "username": "",
    "email": "",
    "password": ""
  }
  constructor(private FormBuilder: FormBuilder, private auth: AuthServiceService) { }
  //
  ngOnInit() {
    this.registerForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  submitRegister() {
    this.submitted = true;
    //check validate
    if (this.registerForm.invalid) {
      alert('Error');
    } else {
      this.userRegister.username = this.registerForm.value.username;
      this.userRegister.email=this.registerForm.value.email;
      this.userRegister.password = this.registerForm.value.password;

      this.auth.registerService(this.userRegister).subscribe({
        next: (data: any) => {
          console.log(data);
          Swal.fire({
            title: 'Success!',
            text: 'Register Success',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        },
        error: (error: any) => {
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
}



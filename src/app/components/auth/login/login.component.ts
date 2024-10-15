import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,private router: Router,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false]
    });
  const userDate= localStorage.getItem('userData')
  console.log('userDate',userDate);
  
    if (userDate) {
      this.router.navigate(['/home'])
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData);
      // Store the form data in localStorage as a string
      localStorage.setItem('userData', JSON.stringify(formData));
      this.router.navigate(['/home'])

    } else {
      console.log('Form is invalid');
    }
  }
  

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}

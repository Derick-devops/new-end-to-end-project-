
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GoogleAuthComponent } from '../google-auth/google-auth.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    GoogleAuthComponent
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent implements OnInit {

  @Input() formType: string = 'sign-in';
  @Input() title: string = '';
  @Input() buttonLabel: string = 'Sign in';
  @Input() footerText: string = 'Do not have an account?';
  @Input() footerLinkText: string = 'Sign up';
  @Input() footerLinkRoute: string = '/sign-up';

  signInForm!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  errorMessage = '';
  isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      })
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid || this.isSubmitting) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    const { email, password } = this.signInForm.getRawValue();

    const authRequest =
      this.formType === 'sign-in'
        ? this.authService.loginUser(email, password)
        : this.authService.registerUser(email, password);

    authRequest.subscribe({
      next: (res) => {
        const user = res.user;

        // Keep the email for compatibility with the existing interceptor.
        // The interceptor should obtain a fresh ID token from Firebase.
        localStorage.setItem(
          'user',
          JSON.stringify({ email: user.email })
        );

        this.isSubmitting = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Authentication failed:', error);

        this.errorMessage =
          this.formType === 'sign-in'
            ? 'Sign-in failed. Check your email and password, then try again.'
            : 'Registration failed. Please check your details and try again.';

        this.isSubmitting = false;
      }
    });
  }
}

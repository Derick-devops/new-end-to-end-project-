
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-google-auth-button',
  imports: [],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.css'
})
export class GoogleAuthComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  errorMessage = '';

  signIn(): void {
    this.errorMessage = '';

    this.authService.googleSignInAndSignOut().subscribe({
      next: (res) => {
        const user = res.user;

        localStorage.setItem(
          'user',
          JSON.stringify({ email: user.email })
        );

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Google sign-in failed:', error);
        this.errorMessage =
          'Google sign-in failed. Please try again.';
      }
    });
  }
}

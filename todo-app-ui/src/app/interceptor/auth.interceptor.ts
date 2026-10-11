
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);

  return from(auth.authStateReady()).pipe(
    switchMap(() => {
      const user = auth.currentUser;

      if (!user) {
        return next(req);
      }

      return from(user.getIdToken()).pipe(
        switchMap((token) => {
          const authenticatedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });

          return next(authenticatedRequest);
        })
      );
    })
  );
};

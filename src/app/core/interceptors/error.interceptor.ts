import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError(
      (error: HttpErrorResponse) => {
        let message = 'Unexpected error occurred';
        if (error.error?.message) {
          message = error.error.message;
        }

        snackBar.open(message,'Close',
          {
            duration: 4000
          });
        return throwError(
          () => error
        );
      })
  );
};

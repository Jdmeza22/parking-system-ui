import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Unexpected error occurred';
      switch (error.status) {
        case 400:
          message = error.error?.message ?? 'Bad request';
          break;
        case 404:
          message = 'Resource not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
        default:
          message = error.error?.message ??'Unexpected error occurred';
          break;
      }

      toastr.error(message);
      return throwError(() => error);

    })

  );

};

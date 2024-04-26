import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const credentials = btoa('test@gmail.com' + ':' + `1234`);
  const headers = new HttpHeaders({
    Authorization: `Basic ${credentials}`
  });

  const authReq = req.clone({ headers });

  return next(authReq);
};


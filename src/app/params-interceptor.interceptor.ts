import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

export const paramsInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let req = request.clone({
      headers: request.headers.set(
        'token',
        this._CookieService.get('userToken')
      ),
    });
    return next.handle(req);
  }
};

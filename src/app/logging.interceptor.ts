import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('Token')) {
      // console.log("hi before interceptor");

      let Authservice = this.injector.get(AuthService);
      let tokeniz = request.clone({
        setHeaders: {
          Authorization: `${Authservice.getToken()}`
        }
      })
      return next.handle(tokeniz);
    }
    else {
      console.log("after else");

      return next.handle(request)
    }
  }
}

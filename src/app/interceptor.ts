import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { catchError, delay, retry } from "rxjs/operators";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone();

    return next.handle(modifiedReq).pipe(delay(5000));
  }
}
